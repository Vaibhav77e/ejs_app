const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.render('new_home')
});

router.get('/login',(req,res)=>{
    res.render('login_screen/login_screen');
});

// router.get('/register',(req,res)=>{
//     res.render('login_screen/login_screen');
// });

router.get('/addContacts',(req,res)=>{
    res.render('contacts_view_screen/add_contacts');
});

module.exports = router;