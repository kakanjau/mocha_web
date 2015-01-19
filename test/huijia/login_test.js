var testing = require('selenium-webdriver/testing'),
    assert = require('assert');

var test = {};

var localDriver = null;
var localWebdriver = null;
var elem = null;

test.init = function(driver, webdriver){
    localDriver = driver;
    localWebdriver = webdriver;
    elem = elem || {
        phone: localWebdriver.By.name('phone'),
        password: localWebdriver.By.name('password'),
        loginBtn: localWebdriver.By.xpath("//a[@class='btn-img btn-entry']")
    };
};

test.open = function(){
    return localDriver.get('http://mall.huijiacn.com/#/login');
};

test.fillForm = function(){
    localDriver.findElement(elem.phone).sendKeys('18012950566');
    localDriver.findElement(elem.password).sendKeys('41220403');
};

test.doLogin = function(){
    var btn = localDriver.findElement(elem.loginBtn);
    return btn.click();
};

test.run = function(){
    testing.describe('登录慧驾', function(){
        testing.it('打开慧驾页面', function(){
            test.open()
            .then(function(){
                localDriver.getCurrentUrl().then(function(value){
                    assert.equal(value, 'http://mall.huijiacn.com/#/login');
                });
            });
        });

        testing.it('填写登录信息', function(){
            localDriver.wait(localWebdriver.until.elementLocated(localWebdriver.By.name('phone')), 10000)
            .then(function(){
                test.fillForm();
            }).then(function(){
                localDriver.findElement(elem.phone).getAttribute('value').then(function(value){
                    assert.equal(value, '18012950566');
                });
            });
        });
    });
};

module.exports = test;