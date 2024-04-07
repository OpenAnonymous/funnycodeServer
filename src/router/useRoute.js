const express = require('express');
const router = express.Router();

const Cupload = require('../middlewares/fileSaveConfig.js');
const controller = require('../controller/index.js');
const AdminController = require('../controller/Admin.js');
const verifyToken = require('../middlewares/accesstoken/validatetoken.js');

const readvalidate = require('../middlewares/validate/readvalidate.js');
const deletevalidate = require('../middlewares/validate/deletevalidate.js');
const validateData = require('../middlewares/validate/createvalidate.js');

router.get('/codes',readvalidate, controller.read);
router.post('/createCode',verifyToken,Cupload,validateData,controller.create);
router.delete('/deleteCode',verifyToken,deletevalidate,controller.delete);
router.get("/getFile",controller.readFile);

router.post('/signin', AdminController.signin);
router.post('/signup', AdminController.signup);
module.exports = router;