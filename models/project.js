const mongoose = require('mongoose');
const projectSchema = new mongoose.Schema({
    name: String,
    description: String,
    startDate: Date,
    dueDate: Date,
    status: String,
    priority: Number,
    creator:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    team: [{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User'
    }],
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



