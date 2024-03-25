// logout functionality
exports.logout = async(req, res) => {
    try{
        res.cookie('token','none',{
            expires:new Date(Date.now()),
            httpOnly:true,
         });
         res.status(200).json({
            message:"You logged out successfully",
         })
    }
    catch(err){
        return res.status(500).json({ error: err.message });
    }
}