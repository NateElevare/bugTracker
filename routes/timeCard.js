const express = require('express');
const router = express.Router();
const { createTimeCard, readTimeCard, updateTimeCard, deleteTimeCard, listTimeCard, deleteAllTimeCards } = require('../middleware/timeCard');


router.post('/timeCards', async (req, res) => {
    try {
        const createdTimeCard = await createTimeCard(req.body);
        res.json(createdTimeCard);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

router.get('/timeCards', async (req, res) => {
    try {
        const timeCards = await listTimeCard();
        res.status(200).json(timeCards)
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

router.get('/timeCards/:id', async (req, res) => {
    try {
        const reTimeCard = await readTimeCard(req.params.id);
        res.json(reTimeCard);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

router.put('/timeCards/:id', async (req, res) => {
    try {
        const updatedTimeCard = await updateTimeCard(req.params.id, req.body);
        res.json(updatedTimeCard);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

router.delete('/timeCards/:id', async (req, res, next) => {
    try {
        const deletedColleciton = await deleteTimeCard(req.params.id);
        res.json(deletedColleciton);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

router.delete('/timeCards', async (req, res, next) => {
    try {
        const deletedCollecitons = await deleteAllTimeCards();
        res.json(deletedCollecitons);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})



module.exports = router;


