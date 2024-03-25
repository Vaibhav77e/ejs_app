const Contact = require('../../models/contacts/contacts_models');

exports.updateContacts = async (req, res) => {
    const userID = req.user.id;
    try{
        if(!userID){
            return res.status(404).json({message:"User not found"});
        }

        console.log(`Updated : ${userID}`);

        const {name,phoneNumber} = req.body;

        let contacts = await Contact.findOneAndUpdate({userId: userID},
            {name:name,phoneNumber:phoneNumber},
            {new:true});

        if(!contacts){
            return res.status(404).json({message:"Couldn't update the contact"});
        }

        return res.status(200).json({
            data: contacts
        });

    }catch(err){
        res.status(500).json({
            err:err.message
        });
    }
}