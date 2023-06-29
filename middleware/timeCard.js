const TimeCard = require('../models/timeCard');
//const mongoose = require('mongoose');

const createTimeCard = async (timeCardData) => {
    try {
        const timeCard = new TimeCard(timeCardData);
        const savedTimeCard = await timeCard.save();
        return savedTimeCard;
    } catch (error) {
        throw error;
    }
};

const updateTimeCard = async (id, updateData) => {
    try {
        const updatedTimeCard = await TimeCard.findByIdAndUpdate(id, updateData, { new: true });
        return updatedTimeCard;
    } catch (error) {
        throw error;
    }
};

const readTimeCard = async (id) => {
    try {
        const foundTimeCard = await TimeCard.findById(id);
        return foundTimeCard;
    } catch (error) {
        throw error;
    }
};

const listTimeCard = async () => {
    try {
        const timeCards = await TimeCard.find();
        return timeCards;
    } catch (error) {
        throw error;
    }
};

const deleteTimeCard = async (id) => {
    try {
        const deletedTimeCard  = await TimeCard.findByIdAndDelete(id);
        return deletedTimeCard;
    } catch (error) {
        throw error;
    }
};

const deleteAllTimeCards = async () => {
    try {
        const deletedTimeCards = await TimeCard.deleteMany();
        return deletedTimeCards;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    readTimeCard,
    createTimeCard,
    updateTimeCard,
    listTimeCard,
    deleteTimeCard,
    deleteAllTimeCards
};
