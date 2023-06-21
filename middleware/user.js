const User = require('./userModel'); // path to your User model file

const createUser = async (userData) => {
    try {
        const user = new User(userData);
        const savedUser = await user.save();
        return savedUser;
    } catch (error) {
        throw error;
    }
};

const modifyUser = async (userId, updateData) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(userId, updateData, { new: true });
        return updatedUser;
    } catch (error) {
        throw error;
    }
};

const findUser = async (userId) => {
    try {
        const foundUser = await User.findById(userId);
        return foundUser;
    } catch (error) {
        throw error;
    }
};

const listUsers = async () => {
    try {
        const users = await User.find();
        return users;
    } catch (error) {
        throw error;
    }
};

const deleteUser = async (userId) => {
    try {
        const deletedUser = await User.findByIdAndDelete(userId);
        return deletedUser;
    } catch (error) {
        throw error;
    }
};

module.exports = {
    findUser,
    createUser,
    modifyUser,
    listUsers,
    deleteUser
};
