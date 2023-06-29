const mongoose = require('mongoose');
const projectSchema = new mongoose.Schema({
    name: String,
    description: String,
    startDate: Date,
    dueDate: Date,
    status: String,
    priority: Number,
    userId: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User'
    },
    collectionIds: [{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Collection'
    }],
    timeCardIds: [{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'TimeCard'
    }],

});

module.exports = mongoose.model('Project', projectSchema);



