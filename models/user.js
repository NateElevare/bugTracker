const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: {
        type: String,
        required: true,
        unique: true
    },
    admin: Boolean,
    active: Boolean,
    projectIds: [mongoose.Schema.Types.ObjectId]
});

module.exports = mongoose.model('User', userSchema);





