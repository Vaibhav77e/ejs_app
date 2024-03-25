const express = require('express');
const router = express.Router();
const isUserAuthenticated = require('../../middlewares/isUserAuthenicated');


const {createNewContact} = require('../../controllers/contact_controllers/create_new_contact');
const {viewMyAccounts} = require('../../controllers/contact_controllers/view_my_contacts');

router.post('/contact/createNewContact',isUserAuthenticated,createNewContact);
router.get('/contact/viewMyAccounts',isUserAuthenticated,viewMyAccounts);

module.exports = router;