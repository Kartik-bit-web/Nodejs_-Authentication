const route = require('express').Router();
const signGoogle = require('../controllers/googleSignin')
const siginGithub = require('../controllers/githubSignin')


route.get('/', (req, res) => {
    res.render('index')
})

route.use('/auth', signGoogle)
route.use('/authGit', siginGithub)


module.exports = route