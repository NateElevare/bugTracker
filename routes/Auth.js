
const express = require('express');
const router = express.Router();

router.get('/auth', (req, res, next) => {
    res.send('This is get in auth.js');
})

router.post('/auth', (req, res, next) => {
    res.send('This is post in auth.js');
})

router.put('/auth', (req, res, next) => {
    res.send('This is put in auth.js');
})

router.delete('/auth', (req, res, next) => {
    res.send('This is delete in auth.js');
})


module.exports = router;


