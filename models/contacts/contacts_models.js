const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
    userId:{
        type:mongoose.Schema.ObjectId,
        ref:'User',
        required: true,
    },
    name:{
        type:String,
        required:true,
    },
    phoneNumber:{
        type:String,
        required:true,
    }
});


const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;