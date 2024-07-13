const mongoose = require('mongoose');

const authSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    secret: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('auths', authSchema);