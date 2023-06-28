const mongoose = require('mongoose');
const timeCardSchema = new mongoose.Schema({
    timeIn: Date,
    timeOut: Date,
    projectId: mongoose.Schema.Types.ObjectId,
    punchIds: [mongoose.Schema.Types.ObjectId],

});

module.exports = mongoose.model('Collection', timeCardSchema);