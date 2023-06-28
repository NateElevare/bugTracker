const mongoose = require('mongoose');
const bugSchema = new mongoose.Schema({
    name: String,
    description: String,
    priority: Number,
    stageId: mongoose.Schema.Types.ObjectId

});

module.exports = mongoose.model('Bug', bugSchema);