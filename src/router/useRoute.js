const express = require('express');
const router = express.Router();

const Cupload = require('../middlewares/fileSaveConfig.js');
const controller = require('../controller/index.js');

router.get('/', controller.read);
router.post('/createCode',Cupload,controller.create);

module.exports = router;