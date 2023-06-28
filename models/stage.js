const mongoose = require('mongoose');
const stageSchema = new mongoose.Schema({
    name: String,
    description: String,
    collectionId: mongoose.Schema.Types.ObjectId,
    taskIds: [mongoose.Schema.Types.ObjectId],

});

module.exports = mongoose.model('Stage', stageSchema);