const User = require('../models/user/userModel');
const jwt =require('jsonwebtoken');

const isUserAuthenticated = async (req,res,next) => {
    let token;
    try{
        if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
            token = req.headers.authorization.split(' ')[1];
        }else{
            return res.status(401).json({message: "You are not authorized to access this resource."});
        }

        if(token===null){
            res.status(401).json({message:'Your unauthorized to access this resource,login first access this resources'});
        }

        const verifyToken = jwt.verify(token,process.env.JWT_SECRET_KEY);

        const user = await User.findById(verifyToken.id);

        if(!user){
            return res.status(400).json({message:"User not found"});
        }
        req.user = user;

        next();
    }
    catch(err){
        return res.status(200).json({message: err.message});
    }
}

module.exports = isUserAuthenticated;