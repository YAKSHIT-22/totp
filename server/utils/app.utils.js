
const { authenticator } = require("otplib");

// secret generator
exports.generateSecret = () => authenticator.generateSecret();

// generate otp
exports.generateOTP = (secret) => authenticator.generate(secret);

// verify otp
exports.verifyOTP = (secret, token) => authenticator.verify({ token, secret });

exports.service = "Optmyzr";