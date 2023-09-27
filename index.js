const express  = require("express");
const bodyparser = require('body-parser')
const session = require('express-session');
const passport = require('passport')

//routes 
const signin = require('./routers/sign_in')
const googleSign = require('./routers/signingoogle')

app = express()


//session set-up for recorgize the users for only one day
app.use(session({
    //maxAge: 24 *60 * 60* 1000,
    secret: "thisissecret",
    resave: false,
    saveUninitialized: true,
    cookie : {httpOnly: false, secure: false}
    
}))

app.use(passport.initialize())
app.use(passport.session())

app.use(bodyparser.json()) 
app.use(bodyparser.urlencoded({ extended: true }))


//app.use(express.static('public'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.send('home') 
});


//Routes
app.use('/sign', signin)
app.use('/login', googleSign)

//To un recorgnisted routes
app.get('*', (req, res)=>{
    res.send("Invaild Route")
})


const port = 3000
app.listen(port, ()=>{
    console.log(`Example app listening on port ${port}`);
});