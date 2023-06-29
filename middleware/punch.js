const Punch = require('../models/punch');
//const mongoose = require('mongoose');

const createPunch = async (punchData) => {
    try {
        const punch = new Punch(punchData);
        const savedPunch = await punch.save();
        return savedPunch;
    } catch (error) {
        throw error;
    }
};

const updatePunch = async (id, updateData) => {
    try {
        const updatedPunch = await Punch.findByIdAndUpdate(id, updateData, { new: true });
        return updatedPunch;
    } catch (error) {
        throw error;
    }
};

const readPunch = async (id) => {
    try {
        const foundPunch = await Punch.findById(id);
        return foundPunch;
    } catch (error) {
        throw error;
    }
};

const listPunch = async () => {
    try {
        const punchs = await Punch.find();
        return punchs;
    } catch (error) {
        throw error;
    }
};

const deletePunch = async (id) => {
    try {
        const deletedPunch  = await Punch.findByIdAndDelete(id);
        return deletedPunch;
    } catch (error) {
        throw error;
    }
};

const deleteAllPunchs = async () => {
    try {
        const deletedPunchs = await Punch.deleteMany();
        return deletedPunchs;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    readPunch,
    createPunch,
    updatePunch,
    listPunch,
    deletePunch,
    deleteAllPunchs
};
