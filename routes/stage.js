
const express = require('express');
const router = express.Router();

router.get('/stage', (req, res, next) => {
    res.send('This is get in stage.js');
})

router.post('/stage', (req, res, next) => {
    res.send('This is post in stage.js');
})

router.put('/stage', (req, res, next) => {
    res.send('This is put in stage.js');
})

router.delete('/stage', (req, res, next) => {
    res.send('This is delete in stage.js');
})


module.exports = router;


