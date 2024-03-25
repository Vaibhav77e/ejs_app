const express = require('express');
const router = express.Router();
const isUserAuthenticated = require('../../middlewares/isUserAuthenicated');


const {createNewContact} = require('../../controllers/contact_controllers/create_new_contact');
const {viewMyAccounts} = require('../../controllers/contact_controllers/view_my_contacts');
const {updateContacts} = require('../../controllers/contact_controllers/update_my_contacts');
const {deleteMyContacts} = require('../../controllers/contact_controllers/delete_my_contact');

router.post('/contact/createNewContact',isUserAuthenticated,createNewContact);
router.get('/contact/viewMyAccounts',isUserAuthenticated,viewMyAccounts);
router.post('/contact/updateContacts',isUserAuthenticated,updateContacts);
router.post('/contact/deleteContact',isUserAuthenticated,deleteMyContacts);

module.exports = router;