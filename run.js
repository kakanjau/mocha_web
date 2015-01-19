var Mocha = require('mocha');
var fs = require('fs');

var arguments = process.argv.splice(2);

var mocha = new Mocha({
    reporter: 'json',
    timeout: 'no-timeouts'
});
var files = arguments.length > 0 
    ? arguments 
    : fs.readdirSync('./test')
        .filter(function(item){
            return /\.js$/.test(item);
        });

files = files.map(function(item){
            return './test/'+item;
        });

files.forEach(function(item){
    mocha.addFile(item);
});

var runner = mocha.run(function(){});

runner.on('end', function(){
    console.info('');
    console.info('----------test fileList----------');
    console.info(files);

    var d = new Date;
    var dirName = [d.getFullYear(), d.getMonth()+1, d.getDate()].join('-');
    var dirPath = './result/'+dirName;

    fs.existsSync('./result') || fs.mkdirSync('./result');
    fs.existsSync(dirPath) || fs.mkdirSync(dirPath);

    if(runner.testResults){
        var filePath = dirPath + '/' + [d.getHours(), d.getMinutes(), d.getSeconds()].join('_') + '.json';
        fs.writeFile(filePath, JSON.stringify(runner.testResults, null, 2));
    }
});