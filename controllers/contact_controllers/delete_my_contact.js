const Contact = require('../../models/contacts/contacts_models');

exports.deleteMyContacts = async (req, res) => {
    const userID = req.user.id;
    try{
        if(!userID){
            return res.status(404).json({message:"User not found"});
        }

        const {phoneNumber} = req.body;


        let contacts = await Contact.findOne({userId: userID});

        if(!contacts){
            return res.status(404).json({message:"Contact not found"});
        }

        contacts = await Contact.findOneAndDelete({phoneNumber: phoneNumber});

        if(!contacts){
            return res.status(500).json({message:"Couldn't delete the contact"});
        }

        return res.status(200).json({
            message: "Contact deleted successfully"
        });

    }catch(err){
        res.status(500).json({
            err:err.message
        });
    }
}