const getToken = require('./createToken');

exports.sendToken = async (user,statusCode,res,contacts) => {
    // get token
    const token = getToken(user.id);

    console.log(`token : ${token}`);
    
    // options for cookie
    const options = {
        expires : new Date(Date.now() + process.env.COOKIE_EXPIRES_TIME * 24 * 60 * 60 * 1000)
    }

    res.cookie('token', token, options);

    res.render('contacts_view_screen/contacts_view',{contacts:contacts});

    // res
    //     .status(statusCode)
    //     .cookie('token',token,options)
    //     .json({
    //         message: 'Your are logged in successfully',
    //         data:user,
    //         token
    //     });
}


// const getToken = require('./createToken');

// exports.sendToken = async (user,statusCode,res) => {
//     // Get token
//     const token = getToken(user.id);

//     // Options for cookie
//     const options = {
//         expires: new Date(Date.now() + process.env.COOKIE_EXPIRES_TIME * 24 * 60 * 60 * 1000)
//     };

//     // Set token in cookie
//     res.cookie('token', token, options);

//     // Redirect to homepage
//     res.redirect(statusCode,'contacts_view_screen/contacts_view'); // Change '/homepage' to the actual route of your homepage
// };
