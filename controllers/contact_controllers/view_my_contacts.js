const Contact = require('../../models/contacts/contacts_models');

exports.viewMyAccounts = async(req, res)=>{
    try{
        const user = req.user.id;

        if(!user){
            return res.status(404).json({message:"User not found"});
        }

        // console.log(`User : ${user}`);

        const contacts = await Contact.find({userId:user});

        const contactsArray = Object.values(contacts);

        contacts.forEach(contact=>{
            console.log(`Contact Idsss : ${contact._id}`);
        })

        if(!contacts){
            return res.status(404).json({message:"Couldn't fetch contacts"});
        }


        return res.status(200).json({data: contacts});

    }catch(err){
        return res.status(500).json({message:err.message});
    }
}