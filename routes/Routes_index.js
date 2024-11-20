const express = require('express');
const router = express.Router();
const mainController = require('../controllers/indexController');

router.get('/', indexController.index);

module.exports = router;
