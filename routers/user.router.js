const router = require('express').Router();
const UserController = require("../controller/user.controller");
const db = require('../config/db');

router.post('/register', UserController.register);

router.post('/login',UserController.login);

router.get('/getmenu',UserController.getmenu);

router.post('/placeorder',UserController.placeorder);

router.post('/getprodetails',UserController.getprodetails);

router.post('/getuserorders',UserController.getuserorders);




router.post('/adminlogin',UserController.adminlogin);
router.get('/getusers',UserController.getusers);
router.delete('/removeuser',UserController.removeuser);
router.delete('/removeorder',UserController.removeorder);
router.post('/updatefoodlist',UserController.updatefoodlist);
router.get('/getorders',UserController.getorders);
router.post('/moveorders',UserController.moveorders);
router.get('/getdelivers',UserController.getdelivers);
router.get('/getoverview',UserController.getoverview);
router.get('/getdeliveroverview',UserController.getdeliveroverview);
router.get('/getUserCount',UserController.getUserCount);




module.exports = router;