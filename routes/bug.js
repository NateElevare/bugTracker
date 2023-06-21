
const express = require('express');
const router = express.Router();

router.get('/bug', (req, res, next) => {
    res.send('This is get in bug.js');
})

router.post('/bug', (req, res, next) => {
    res.send('This is post in bug.js');
})

router.put('/bug', (req, res, next) => {
    res.send('This is put in bug.js');
})

router.delete('/bug', (req, res, next) => {
    res.send('This is delete in bug.js');
})


module.exports = router;


