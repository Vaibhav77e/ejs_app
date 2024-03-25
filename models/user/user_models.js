const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');


const userSchema = mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
        validate : [validator.isEmail,'Please enter a valid email address']
    },
    phoneNumber:{
        type:String,
        required:true,
        unique:[true,"You have already saved this contact to your account"],
    },
    password:{
        type: String,
        required: true,
        minLength:[8,"The password must be of 8 characters"]
    },
},
{
    timestamps:true,
}
);

userSchema.methods.comparePassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password);
}

const userModel = mongoose.model('User',userSchema);

module.exports =userModel;

