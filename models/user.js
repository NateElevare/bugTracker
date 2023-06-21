const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    id: Number,
    username: String,
    password: String,
    email: {
        type: String,
        required: true,
        unique: true
    },
    admin: Boolean,
    active: Boolean,
});

module.exports = mongoose.model('User', userSchema);