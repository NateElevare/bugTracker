
const express = require('express');
const router = express.Router();
const passport = require('passport');
const User = require('../models/user'); 

router.get('/auth', (req, res, next) => {
    res.send('This is get in auth.js');
})

router.post('/login', passport.authenticate('local', {
    failureFlash: true
}), (req, res) => {
    res.status(200).send(req.user);

});


router.get('/logout', (req, res) => {
    req.logout((err) => {
        if (err) {
            return res.send(err);
        }

    });
    res.clearCookie('connect.sid');
    res.status(200).send('You are logged out');
    // req.session.destroy(err => {
    //     if (err) {  
    //         return res.send(err);
    //     }
    //     // Moved this inside the callback
    // });
});

router.post('/register', (req, res) => {
    const user = new User({
        username: req.body.username,
        password: req.body.password,
    });
    user.save().then((user) => {
        return res.status(200).send(user);
    }).catch((err) => {
        return res.status(400).send(err.message);
    });
});

router.put('/auth', (req, res, next) => {
    res.send('This is put in auth.js');
})

router.delete('/auth', (req, res, next) => {
    res.send('This is delete in auth.js');
})


module.exports = router;


