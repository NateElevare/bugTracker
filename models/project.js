const mongoose = require('mongoose');
const projectSchema = new mongoose.Schema({
    id: Number,
    name: String,
    description: String,
    startDate: Date,
    modifiedDate: Date,
    status: String,
    priority: String
});

module.exports = mongoose.model('User', userSchema);