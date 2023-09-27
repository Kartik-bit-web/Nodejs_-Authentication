const gitRoute = require('express').Router();
const passport = require('passport');
require('../config/passportGit')

function islogin(req, res, next){
    req.user ? next() : res.send('erro')
}

gitRoute.get('/', passport.authenticate('github', { scope: ['profile']}))

gitRoute.get('/github', passport.authenticate('github', {
    failureRedirect: '/login/authGit/failure',
    successRedirect: '/login/authGit/success'
}))

gitRoute.get('/success', islogin, (req, res) =>{
    res.send('Welcome: '+ req.user.username)
})

gitRoute.get('/failure', (req, res) =>{
    res.send('Somthing is wrong')
})

module.exports = gitRoute