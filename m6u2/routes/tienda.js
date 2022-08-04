var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('tienda',{
    isTienda:true
  }); //tienda.hbs
});

module.exports = router;
