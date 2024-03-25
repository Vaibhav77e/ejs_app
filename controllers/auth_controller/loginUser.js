const User = require('../../models/user/user_models');
const {sendToken} = require('../../utils/sendJWT');
const Contacts = require('../../models/contacts/contacts_models');


exports.LogInUser = async(req,res,next)=>{
    try{
        console.log("Login User trigerred");
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


        console.log(`User ID : ${user.id}`);

        const contacts = await Contacts.find({userId:user.id});

        console.log(`Contacts : ${contacts}`);

        const contactsArray =await Object.values(contacts);

        console.log(`Contacts Array: ${contactsArray}`);
   
        await sendToken(user,200,res,contacts);

    }
    catch(err){
       res.status(500).json({
           err:err.message
       })
    }
   }
