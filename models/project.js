const mongoose = require('mongoose');
const projectSchema = new mongoose.Schema({
    name: String,
    description: String,
    startDate: Date,
    dueDate: Date,
    status: String,
    priority: Number,
    userId: mongoose.Schema.Types.ObjectId,
    collectionIds: [mongoose.Schema.Types.ObjectId],
    timePunchIds: [mongoose.Schema.Types.ObjectId]

});

module.exports = mongoose.model('Project', projectSchema);