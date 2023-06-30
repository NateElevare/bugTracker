const mongoose = require('mongoose');
const bugSchema = new mongoose.Schema({
    name: String,
    description: String,
    priority: Number,
    stageId: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Stage'
}

});

module.exports = mongoose.model('Bug', bugSchema);