var webdriver = require('selenium-webdriver');

var login = require('./huijia/login_test');
var screenShot = require('../util/screen_shot');

var driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();

login.init(driver, webdriver);

login.run();