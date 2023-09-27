const signGoole = require('express').Router();
const passport = require('passport');
//passport for Auth users
require('../config/passport');

//Middleware
function islogin(req, res, next){
    req.user ? next() : res.sendStatus(404);
}

signGoole.get('/', passport.authenticate('google', {
    scope: ['profile']
}
));

signGoole.get('/google', passport.authenticate('google', { 
    failureRedirect: "/login/auth/failure"}),
    function(req, res){
        res.redirect('/login/auth/success')
    });

signGoole.get('/success', islogin, (req, res) =>{
    req.session.name = req.user.given_name
    x = req.user.given_name
    req.session.save(function(err){
        if(err){console.log(err)}
    })
    res.render('profile', {name:x})
})

signGoole.get('/failure', (req, res) =>{
    res.send('Error Here')
})

module.exports = signGoole;

