var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('tienda' ); //view/tienda.hbs
});

module.exports = router;
