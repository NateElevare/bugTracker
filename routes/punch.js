const express = require('express');
const router = express.Router();
const { createPunch, readPunch, updatePunch, deletePunch, listPunch, deleteAllPunchs } = require('../middleware/punch');


router.post('/punchs', async (req, res) => {
    try {
        const createdPunch = await createPunch(req.body);
        res.json(createdPunch);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

router.get('/punchs', async (req, res) => {
    try {
        const punchs = await listPunch();
        res.status(200).json(punchs)
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

router.get('/punchs/:id', async (req, res) => {
    try {
        const rePunch = await readPunch(req.params.id);
        res.json(rePunch);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

router.put('/punchs/:id', async (req, res) => {
    try {
        const updatedPunch = await updatePunch(req.params.id, req.body);
        res.json(updatedPunch);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

router.delete('/punchs/:id', async (req, res, next) => {
    try {
        const deletedColleciton = await deletePunch(req.params.id);
        res.json(deletedColleciton);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

router.delete('/punchs', async (req, res, next) => {
    try {
        const deletedCollecitons = await deleteAllPunchs();
        res.json(deletedCollecitons);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})



module.exports = router;
