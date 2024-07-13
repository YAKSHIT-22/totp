const { verifyAuth, signUp, login } = require('../controllers/auth.controller');

const router = require('express').Router();

router.route("/signup")
    .get(signUp);

router.route("/login")
    .post(login);

router.route("/verify-otp")
    .post(verifyAuth);

module.exports = router;