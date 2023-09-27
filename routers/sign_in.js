const express = require('express');

const signin = require('../controllers/sign_handler')

sign = express()

sign.use('/', signin)

module.exports = signin