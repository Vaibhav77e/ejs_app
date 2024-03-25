const User = require('../../models/user/user_models');
const bcrypt = require('bcryptjs');


// register user
exports.registerUser = async(req, res, next) => {
    try{

        console.log('triggered ')
        const {name,email,phone,password} = req.body;

        console.log(req.body);

        let user = await User.find({email:email});

        if(user.length>0){
            return res.status(400).json({
                message:"User already exists.Please login different account or create one"
            });
        }

        console.log('triggered 2')

        if(user.phone===phone){
            return res.status(400).json({message:"Phone Number already exists"})
        }

        console.log('triggered 3')

        const hasedPassword = await bcrypt.hash(password,10);

        console.log('triggered 4')

         user = await User.create({
            name,
            email,
            phone:phone,
            password:hasedPassword
        });

        console.log('triggered 5')

        console.log(`User : ${user}`);

        if(!user){
            return res.status(400).json({
                message:"Something went wrong"
            });
        }

        // return res.status(200).json({
        //     data: user
        // });

        return res.render('login_screen/login_screen');

    }
    catch(err){
        res.status(500).json({
            err:err.message
        });
    }
}
