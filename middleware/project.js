const Project = require('../models/project'); // path to your User model file
const { findUser, createUser, modifyUser, listUsers, deleteUser } = require('./user');

const createProject = async (projectData) => {
    try {
        const project = new Project(projectData);
        const savedProject = await project.save();
        return savedProject;
    } catch (error) {
        throw error;
    }
};

const updateProject = async (id, updateData) => {
    try {
        const updatedProject = await Project.findByIdAndUpdate(id, updateData, { new: true });
        return updatedProject;
    } catch (error) {
        throw error;
    }
};

const readProject = async (id) => {
    try {
        const foundProject = await Project.findById(id);
        return foundProject;
    } catch (error) {
        throw error;
    }
};

const listProjects = async () => {
    try {
        const projects = await Project.find();
        return projects;
    } catch (error) {
        throw error;
    }
};

const deleteProject = async (id) => {
    try {
        const deletedProject = await Project.findByIdAndDelete(id);
        return deletedProject;
    } catch (error) {
        throw error;
    }
};

module.exports = {
    readProject,
    createProject,
    updateProject,
    listProjects,
    deleteProject
};
