const mongoose = require('mongoose');
const collectionSchema = new mongoose.Schema({
    name: String,
    description: String,
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