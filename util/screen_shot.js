var fs = require('fs');

function shot(driver, path){
    return driver.takeScreenshot().then(function(data){
        var base64Data = data.replace(/^data:image\/png;base64,/,"");
        fs.writeFile(path, base64Data, 'base64', function(err) {
            if(err) console.log(err);
        });
    });
}

exports.shot = shot;