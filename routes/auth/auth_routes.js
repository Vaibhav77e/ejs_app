const express = require('express');
const router = express.Router();


const {registerUser} = require('../../controllers/auth_controller/registerUser');
const {LogInUser} = require('../../controllers/auth_controller/loginUser');
const {logout} = require('../../controllers/auth_controller/logoutUser');
const isUserAuthenticated = require('../../middlewares/isUserAuthenicated');


router.post('/user/createNewAccount',registerUser);
router.post('/user/loginUser',LogInUser);
router.get('/user/logout',isUserAuthenticated,logout);

module.exports = router;
