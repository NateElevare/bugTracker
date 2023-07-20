const mongoose = require('mongoose');
const punchSchema = new mongoose.Schema({
    in: Boolean,
    createdOn: {
        type: Date,
        default: Date.now
    },
    timeCardId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'TimeCard'
    },
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }


});

module.exports = mongoose.model('Punch', punchSchema);