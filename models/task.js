const mongoose = require('mongoose');
const taskSchema = new mongoose.Schema({
    name: String,
    description: String,
    priority: Number,
    stageId: mongoose.Schema.Types.ObjectId

});

module.exports = mongoose.model('Task', taskSchema);