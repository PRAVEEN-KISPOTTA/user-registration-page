
const users = require("../models/userModel");
const bcrypt = require("bcrypt");

const securePassword = async(password)=>{
    try {
       const passwordHash = await bcrypt.hash(password, 10);
       return passwordHash;
        
    } catch (error) {
        console.log(error.message);
    }
}

const loadRegister = async(req, res)=>{
    try{
        res.render("registration");
    }
    catch (err) {
        console.log(err.message);
    }
}

const insertUser = async(req, res)=>{
    try{
        const sPassword = await securePassword(req.body.password);
        const userVariable = new users({
            name: req.body.name,
            mobile: req.body.Mobile,
            email: req.body.email,
            // password: req.body.password,
            password: sPassword,
            image: req.file.filename,
            is_Admin: 0
        });

        const userData = await userVariable.save();

        if(userData){
            res.render("registration", {msg: "registration successful"});
        }else{
                res.render("registration", {msg: "registration failed"});
        }
    }
    catch (err) {
        console.log(err.message);
    }
}

module.exports = {
    loadRegister,
    insertUser
}
