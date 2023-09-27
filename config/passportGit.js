const passport = require('passport');
const gitStatergy = require('passport-github')
const keys = require('../config/keys')

passport.serializeUser((user, done) =>{
    done(null, user)
})

passport.deserializeUser((user, done) =>{
    done(null, user)
})

passport.use(new gitStatergy({
    clientID: keys.passportGit.userID,
    clientSecret: keys.passportGit.userSecret,
    callbackURL: 'http://127.0.0.1:3000/login/authGit/github'
},
function(request, accessToken, refreshToken, profile, done){
    console.log(profile)
    done(null, profile)

}))