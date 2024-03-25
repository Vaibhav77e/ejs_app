const User = require('../../models/user_models');
const bcrypt = require('bcryptjs');


// register user
exports.registerUser = async(req, res, next) => {
    try{
        const {name,email,password} = req.body;

        let user = await User.find({email:email});

        if(user.length>0){
            return res.status(400).json({
                message:"User already exists.Please login different account or create one"
            });
        }

        const hasedPassword = await bcrypt.hash(password,10);

         user = await User.create({
            name,
            email,
            password:hasedPassword
        });

        if(!user){
            return res.status(400).json({
                message:"Something went wrong"
            });
        }
        
    }
    catch(err){
        res.status(500).json({
            err:err.message
        });
    }
}
