var express = require('express');
var router = express.Router();

// Controller modules
var home_controller = require('../controllers/homeController');


/* GET home root page */
router.get('/', home_controller.index);

module.exports = router;
