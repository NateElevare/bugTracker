const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const User = require('../models/user'); 

passport.serializeUser((user, done) => {

    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    try {
        let user = await User.findById(id);
        done(null, user);
    } catch(err) {
        done(err);
    }
});

passport.use(new LocalStrategy(
    async function(username, password, done) {
        try {
            let user = await User.findOne({ username: username });
            if (!user) {
                return done(null, false, { message: 'Incorrect username.' });
            }
            if (!user.validPassword(password)) {
                return done(null, false, { message: 'Incorrect password.' });
            }
            return done(null, user);
        } catch(err) {
            return done(err);
        }
    }
));
module.exports = passport;