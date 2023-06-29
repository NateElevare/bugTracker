const mongoose = require('mongoose');
const timeCardSchema = new mongoose.Schema({
    timeIn: Date,
    timeOut: Date,
    timeCardId: mongoose.Schema.Types.ObjectId

});

module.exports = mongoose.model('Collection', timeCardSchema);