const { authenticator } = require('otplib');
const Auth = require('../models/auth.model.js');
const { service, generateSecret, verifyOTP, generateOTP } = require('../utils/app.utils.js');
const bcrypt = require('bcryptjs');

exports.signUp = async (req, res) => {
    try {
        const { email, password } = req.body;
        const existingUser = await Auth.findOne({ email: email });
        if (existingUser) {
            return res.status(400).json({ error: 'User already exists' });
        }

        let hash_password = await bcrypt.hash(password, await bcrypt.genSalt(10));
        const secret = generateSecret();
        const auth = new Auth({
            email,
            secret,
            password: hash_password
        });
        await auth.save();
        const otpAuthUrl = authenticator.keyuri(email, service, secret);
        res.json({ authUrl: otpAuthUrl, otp: generateOTP(secret) });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        let auth = await Auth.findOne({ email });

        if (!auth) return res.status(404).json({ message: "No user found!" });
        let isPasswordValid = bcrypt.compare(password, auth.password);

        if (!isPasswordValid) {
            return res.status(404).json({ message: "Invalid credentials" });
        }

        return res.json({ message: 'OTP is valid' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.verifyAuth = async (req, res) => {
    try {
        const { email, otp } = req.body;
        let auth = await Auth.findOne({ email }).select("-password");
        if (!auth) {
            return res.status(404).json({ message: "No user found!" });
        }

        const isValid = verifyOTP(auth.secret, otp);
        if (!isValid) {
            return res.status(400).json({ message: 'Invalid OTP' });
        }

        return res.json({ message: 'OTP is valid' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}