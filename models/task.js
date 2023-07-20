const mongoose = require('mongoose');
const taskSchema = new mongoose.Schema({
    name: String,
    description: String,
    priority: Number,
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    assignedTo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    stageId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Stage'
    },
    createdOn: {
        type: Date,
        default: Date.now
    },

});

module.exports = mongoose.model('Task', taskSchema);