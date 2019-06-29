var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function (req, res, next) {
    return res.render('shop/index', {title: 'my bank'})
});


module.exports = router;
