const Contact = require('../../models/contacts/contacts_models');


exports.createNewContact = async(req,res)=>{
    const {name,phoneNumber} = req.body;

    const userId = req.user.id;
    if(!userId){
        return res.status(404).json({message:"User not found"});
    }
    try{
        let contact = await Contact.find({userId: userId});
        console.log(`Contacts daa : ${contact}`);
        console.log(`Creating contact ${userId} ${phoneNumber}`);

        // const findcontact = await Contact.find({phoneNumber: phoneNumber});

        // if(findcontact){
        //     return res.status(400).json({message:"Contact already exists"});
        // }

         contact = await Contact.create({
                    userId: userId,
                    name:name,
                    phoneNumber:phoneNumber,
        });
        if(!contact){
            return res.status(404).json({message:"Couldn't create contact,something went wrong"});
        }

        // res.status(200).json({
        //     data: contact
        // });

        res.render('contacts_view_screen/contacts_view',{contact:contact});
    }catch(err){
        return res.status(500).json({message: err.message});
    }
}