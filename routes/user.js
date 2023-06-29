
const express = require('express');
const router = express.Router();
const { findUser, createUser, updateUser, listUsers, deleteUser } = require('../middleware/user');


router.get('/user/:id', async (req, res) => {
    try {
        const foundUser = await findUser(req.params.id)
        res.status(200).json(foundUser)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

router.get('/users', async (req, res) => {
    
    try {
        const userList = await listUsers()
        res.status(200).json(userList)
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

router.post('/user', async (req, res) => {
    try {
        const newUser = await createUser(req.body);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.put('/user/:id', async (req, res) => {
    try {
        const mondifiedUser = await updateUser(req.params.id, req.body)
        res.status(200).json(mondifiedUser)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.delete('/user/:id', async (req, res, next) => {
    try{
        const delUser = await deleteUser(req.params.id)
        console.log(delUser)
        res.status(204).json(delUser)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})


module.exports = router;


