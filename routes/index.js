var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(200).json({status: 'success'});
});

router.head('/card', function(req, res, next){
  console.log(req.body);
  res.status(200).json({status: 'success'});
});

module.exports = router;
