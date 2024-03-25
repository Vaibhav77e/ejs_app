const User = require('../../models/user/user_models');
const {sendToken} = require('../../utils/sendJWT');


exports.LogInUser = async(req,res,next)=>{
    try{
       const {email,password} = req.body;
       if(email.length<0 || password.length<0){
          return res.status(400).json({
               message : "Please provide required fields"
           });
       }
   
       let user = await User.findOne({email: email}).select('+password');
   
       if(user===null){
         return  res.status(400).json({
               message : "Email not found"
           });
       }
   
       const checkPasswordMatched = await user.comparePassword(password);
   
       if(!checkPasswordMatched){
           return res.status(400).json({
               message : "Password doesn't match"
           });
        }
   
       sendToken(user,200,res);
    }
    catch(err){
       res.status(500).json({
           err:err.message
       })
    }
   }
