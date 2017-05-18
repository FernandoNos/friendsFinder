var express = require('express');
var router = express.Router();
var user = require("../biz/user");

/* GET home page. */
router.get('/', function(req, res, next) {
	user.get_user_likes().then(function(response){
		var next = response.json.paging.cursors.after;
		var previous = response.json.paging.cursors.before;
		var data = response.json.data;
		console.log(next);
		console.log(previous);
		res.send(response.json);
	});
});

router.get('/index',function(req,res,next){
	res.render('index', { title: 'Hey', message: 'Hello there!' })
});

module.exports = router;