const mongoose = require('mongoose');
const stageSchema = new mongoose.Schema({
    name: String,
    description: String,
    collectionId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Collection'
    },
    taskIds: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Task'
    }],

});

module.exports = mongoose.model('Stage', stageSchema);