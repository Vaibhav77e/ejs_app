const Contact = require('../../models/contacts/contacts_models');


exports.createNewContact = async(req,res)=>{
    const {name,phoneNumber} = req.body;

    const userId = req.user.id;
    if(!userId){
        return res.status(404).json({message:"User not found"});
    }
    try{
        console.log(`Creating contact ${userId}`);
        let contact = await Contact.find({userId: userId});

        console.log(`Check : ${contact}`);

        if(contact.phoneNumber===phoneNumber){
            return res.status(400).json({message:"You have already added this contact"});
        }

         contact = await Contact.create({
                    userId: userId,
                    name:name,
                    phoneNumber:phoneNumber,
        });
        if(!contact){
            return res.status(404).json({message:"Couldn't create contact,something went wrong"});
        }

        res.status(200).json({
            data: contact
        });
    }catch(err){
        return res.status(500).json({message: err.message});
    }
}