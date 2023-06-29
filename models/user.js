const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: String,
    admin: Boolean,
    active: Boolean,
    projectIds: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project'
    }]
});



// Hash the password before saving it to the database
userSchema.pre('save', async function(next) {
    const user = this;

    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8);
    }
    next();
});

// Method to validate password
userSchema.methods.validPassword = async function(password) {
    return await bcrypt.compare(password, this.password);
};

module.exports = mongoose.model('User', userSchema);





