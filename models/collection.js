const mongoose = require('mongoose');
const collectionSchema = new mongoose.Schema({
    name: String,
    description: String,
    projectId: mongoose.Schema.Types.ObjectId,
    stageIds: [mongoose.Schema.Types.ObjectId],

});

module.exports = mongoose.model('Collection', collectionSchema);