const Task = require('../models/task');
//const mongoose = require('mongoose');

const createTask = async (taskData) => {
    try {
        const task = new Task(taskData);
        const savedTask = await task.save();
        return savedTask;
    } catch (error) {
        throw error;
    }
};

const updateTask = async (id, updateData) => {
    try {
        const updatedTask = await Task.findByIdAndUpdate(id, updateData, { new: true });
        return updatedTask;
    } catch (error) {
        throw error;
    }
};

const readTask = async (id) => {
    try {
        const foundTask = await Task.findById(id);
        return foundTask;
    } catch (error) {
        throw error;
    }
};

const listTask = async () => {
    try {
        const tasks = await Task.find();
        return tasks;
    } catch (error) {
        throw error;
    }
};

const deleteTask = async (id) => {
    try {
        const deletedTask  = await Task.findByIdAndDelete(id);
        return deletedTask;
    } catch (error) {
        throw error;
    }
};

const deleteAllTasks = async () => {
    try {
        const deletedTasks = await Task.deleteMany();
        return deletedTasks;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    readTask,
    createTask,
    updateTask,
    listTask,
    deleteTask,
    deleteAllTasks
};
