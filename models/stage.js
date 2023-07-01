const mongoose = require('mongoose');
const stageSchema = new mongoose.Schema({
    name: String,
    description: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    collectionId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Collection'
    },
    taskIds: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Task'
    }],
    bugIds: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Bug'
    }]

});

module.exports = mongoose.model('Stage', stageSchema);