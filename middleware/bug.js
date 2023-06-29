const Bug = require('../models/bug');
//const mongoose = require('mongoose');

const createBug = async (bugData) => {
    try {
        const bug = new Bug(bugData);
        const savedBug = await bug.save();
        return savedBug;
    } catch (error) {
        throw error;
    }
};

const updateBug = async (id, updateData) => {
    try {
        const updatedBug = await Bug.findByIdAndUpdate(id, updateData, { new: true });
        return updatedBug;
    } catch (error) {
        throw error;
    }
};

const readBug = async (id) => {
    try {
        const foundBug = await Bug.findById(id);
        return foundBug;
    } catch (error) {
        throw error;
    }
};

const listBug = async () => {
    try {
        const bugs = await Bug.find();
        return bugs;
    } catch (error) {
        throw error;
    }
};

const deleteBug = async (id) => {
    try {
        const deletedBug  = await Bug.findByIdAndDelete(id);
        return deletedBug;
    } catch (error) {
        throw error;
    }
};

const deleteAllBugs = async () => {
    try {
        const deletedBugs = await Bug.deleteMany();
        return deletedBugs;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    readBug,
    createBug,
    updateBug,
    listBug,
    deleteBug,
    deleteAllBugs
};
