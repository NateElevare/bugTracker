const mongoose = require('mongoose');
const collectionSchema = new mongoose.Schema({
    name: String,
    description: String,
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    team: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    projectId: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Project'
    },
    stageIds: [{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Stage'
    }]

});

module.exports = mongoose.model('Collection', collectionSchema);