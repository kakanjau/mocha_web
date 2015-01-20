var express = require('express');
var router = express.Router();
var fs = require('fs');

var resultPath = './result';

/* GET home page. */
router.get(/\.json$/, function(req, res, next){
    var filePath = resultPath + req.url;
    var urlQueue = req.url.split('/');
    var fileName = urlQueue[urlQueue.length-1];
    urlQueue = urlQueue.splice(0, urlQueue.length-1);
    var parentUrl = urlQueue.join('/');
    fs.readFile(filePath, function(err, data){
        if(!err){
            var data = {
                fileName: fileName,
                file: JSON.parse(data),
                parentUrl: parentUrl
            };
            res.render('mocha_result', data);
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
