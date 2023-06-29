const Collection = require('../models/collection');
//const mongoose = require('mongoose');

const createCollection = async (collectionData) => {
    try {
        const collection = new Collection(collectionData);
        const savedColleciton = await collection.save();
        return savedColleciton;
    } catch (error) {
        throw error;
    }
};

const updateCollection = async (id, updateData) => {
    try {
        const updatedColletion = await Collection.findByIdAndUpdate(id, updateData, { new: true });
        return updatedColletion;
    } catch (error) {
        throw error;
    }
};

const readCollection = async (id) => {
    try {
        const foundCollection = await Collectlion.findById(id);
        return foundCollection;
    } catch (error) {
        throw error;
    }
};

const listCollection = async (id) => {
    try {
        if(id){
            const collections = await Collection.find({ projectId: id })
            return collections;
        }else{
            const collections = await Collection.find();
            return collections;
        }
    } catch (error) {
        throw error;
    }
};

const deleteCollection = async (id) => {
    try {
        const deletedCollection  = await Collection.findByIdAndDelete(id);
        return deletedCollection;
    } catch (error) {
        throw error;
    }
};

const deleteAllCollections = async () => {
    try {
        const deletedCollections = await Collection.deleteMany();
        return deletedCollections;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    readCollection,
    createCollection,
    updateCollection,
    listCollection,
    deleteCollection,
    deleteAllCollections
};
