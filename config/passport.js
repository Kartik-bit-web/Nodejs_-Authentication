const passport = require('passport')
const googleStrategy = require('passport-google-oauth2').Strategy;

const keys = require('./keys');

passport.serializeUser((user, done) =>{
    done(null, user);
});
passport.deserializeUser(function(user, done){
    done(null, user);
});

passport.use(new googleStrategy({
    clientID: keys.passportSession.userID,
    clientSecret: keys.passportSession.userSecret,
    callbackURL: "http://127.0.0.1:3000/login/auth/google",
    passReqToCallback: true
    },
    function(request, accessToken, refreshToken, profile, done){

        done(null, profile);
    }
));

