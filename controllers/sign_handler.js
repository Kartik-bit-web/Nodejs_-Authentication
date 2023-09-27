const bycypt = require('bcrypt')
sign = function (req, res){

    //IF Request happens then this block gonna working
    if (req){
        //Here is the JSON formate data form HTML
        bod = req.body

        names = bod.names
        email = bod.email
        password = bod.password

        //vailedation for fill the all columns
        if(names == '' || email == '' || password == ''){
            console.log('All field are vaild')
        } else{
            salt = 10
            bycypt.hash(password, salt, (err, haspassword) => {
                if (err){
                    //If Something wrong with password or bycrypt server
                    console.error('Something wrong');
                } 
                else{

                    //Here is email validation for checking if email is miss some important patterns
                    if (emailvaild(email)){

                        //DataBase Data to add name, email and hashed password
                        console.log( 'Here is the hashed password: ',{names:names, email:email, haspassword});
                    }
                    else{
                        console.log('This email is invaild Please enter the vaild email of yours.')
                    }
                }
            })
        }
        return res.render('signin/signin', {name: names})
    } 
    return res.render('signin/signin')
}

function emailvaild(email){
    emailPattren = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    return emailPattren.test(email)
}

module.exports = sign