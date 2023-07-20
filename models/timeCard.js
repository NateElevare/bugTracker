const mongoose = require('mongoose');
const timeCardSchema = new mongoose.Schema({
    name: String,
    projectId: mongoose.Schema.Types.ObjectId,
    punchIds: [mongoose.Schema.Types.ObjectId],
    createdOn: {
        type: Date,
        default: Date.now
    },
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }

});

module.exports = mongoose.model('TimeCard', timeCardSchema);