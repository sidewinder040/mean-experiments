var express = require('express');
var router = express.Router();

// Controller modules
var home_controller = require('../controllers/homeController');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

/* GET home root page */

router.get('/', home_controller.index);

// router.get('/home', function(req, res, next) {
//   res.send('The home route');
// });

module.exports = router;
