# mocha_web
本项目提供2个功能：
1. 执行mocha测试
2. 利用nodejs服务器，在web端显示测试结果

> package.json中包含了selenium-webdriver，也就是说，可以直接利用chrome进行selenium测试
> 如需测试IE、firefox等浏览器，请参考：
>   selenium官网：[selenium](http://www.seleniumhq.org/)
>   或者我的blog：[selenium_mocha_nodejs自动测试 一](http://www.qiaokaka.com/blog/detail/2/548501a3fa8aa39607010b12)


## mocha test
> mocha语法请参考官网：[mocha](http://mochacn.github.io/)

### run 命令
在工程根目录下执行`node run`，会自动测试**/test**目录下的js测试文件，也可以指定test目录下的测试js文件：`node run xxx.js`。

测试结果会自动保存到工程根目录下的**result**文件夹中，文件按照日期分文件夹排序，结果保存为mocha reporter的json格式(后续会提供测试截图与结果的混合显示)。

## web显示结果
根目录执行`npm start`启动node项目，然后访问`http://localhost:3000`，即可查看测试结果