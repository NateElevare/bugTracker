const Stage = require('../models/stage');
//const mongoose = require('mongoose');

const createStage = async (stageData) => {
    try {
        const stage = new Stage(stageData);
        const savedStage = await stage.save();
        return savedStage;
    } catch (error) {
        throw error;
    }
};

const updateStage = async (id, updateData) => {
    try {
        const updatedStage = await Stage.findByIdAndUpdate(id, updateData, { new: true });
        return updatedStage;
    } catch (error) {
        throw error;
    }
};

const readStage = async (id) => {
    try {
        const foundStage = await Stage.findById(id);
        return foundStage;
    } catch (error) {
        throw error;
    }
};

const listStage = async (id) => {
    try {
        if(id){
            let stages = await Stage.find({ collectionId: id })
            const populatedStages = await Promise.all(stages.map(async stage => {
                return await Stage.populate(stage, 'taskIds');
            }))
            return(populatedStages);
        }else{
            let stages = await Stage.find();
            return stages;
        }
    } catch (error) {
        throw error;
    }
};

const deleteStage = async (id) => {
    try {
        const deletedStage  = await Stage.findByIdAndDelete(id);
        return deletedStage;
    } catch (error) {
        throw error;
    }
};

const deleteAllStages = async () => {
    try {
        const deletedStages = await Stage.deleteMany();
        return deletedStages;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    readStage,
    createStage,
    updateStage,
    listStage,
    deleteStage,
    deleteAllStages
};
