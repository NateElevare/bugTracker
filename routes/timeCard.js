
const express = require('express');
const router = express.Router();

router.get('/time', (req, res, next) => {
    res.send('This is get in time.js');
})

router.post('/time', (req, res, next) => {
    res.send('This is post in time.js');
})

router.put('/time', (req, res, next) => {
    res.send('This is put in time.js');
})

router.delete('/time', (req, res, next) => {
    res.send('This is delete in time.js');
})


module.exports = router;


