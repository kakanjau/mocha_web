var express = require('express');
var router = express.Router();
var fs = require('fs');

var resultPath = './result';

/* GET home page. */
router.get(/\.json$/, function(req, res, next){
    var filePath = resultPath + req.url;
    fs.readFile(filePath, function(err, data){
        if(!err){
            res.render('mocha_result', JSON.parse(data));
        }else{
            res.render('mocha_result');
        }
    });
});

router.get(/^\.*/, function(req, res, next){
    var filePath = resultPath + req.url;
    var url = req.url;
    (url[url.length-1] == '/') || (url+='/');
    fs.readdir(filePath, function(err, files){
        if(!err){
            res.render('mocha_list', {url:url, files: files});
        }else{
            res.render('mocha_list');
        }
    });
});

router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
