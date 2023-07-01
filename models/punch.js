const mongoose = require('mongoose');
const punchSchema = new mongoose.Schema({
    timeIn: Date,
    timeOut: Date,
    timeCardId: mongoose.Schema.Types.ObjectId,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }


});

module.exports = mongoose.model('Punch', punchSchema);