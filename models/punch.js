const mongoose = require('mongoose');
const punchSchema = new mongoose.Schema({
    timeIn: Date,
    timeOut: Date,
    timeCardId: mongoose.Schema.Types.ObjectId

});

module.exports = mongoose.model('Punch', punchSchema);