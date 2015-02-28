var express = require('express');
var router = express.Router();
var wiki = require('wikifetch');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { data: 'Express' });
});

router.get('/movie/:title/:id', function(req, res, next){
	var id = req.params.id;
	res.render('movie', {id: id});
});

module.exports = router;
