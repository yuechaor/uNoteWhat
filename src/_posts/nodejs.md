---
title: Nodejs
date: 2019-08-21
category: Nodejs
---
<!-- more -->


## 什么是CommonJs


JavaScript 是一个强大面向对象语言，它有很多快速高效的解释器。然而， JavaScript 标准定义的 API 是为了构建基于浏览器的应用程序。并没有制定一个用于更广泛的应用程序 的标准库。**commonjs规范的提出主要是为了弥补js标准的缺陷，终极目标是建立一个类似于java、python一样的标准库**,而不只是停留在小脚本程序 的阶段。用 CommonJS API 编写出的应用，不仅可以利用 JavaScript 开发客户端应用，而且还可以编写以下应用 。
* 服务器端 JavaScript 应用程序。(nodejs) 
* 命令行工具。 
* 桌面图形界面应用程序。
**CommonJS 就是模块化的标准，nodejs 就是 CommonJS(模块化)的实现。**

## nodejs中的模块化

Node 应用由模块组成，采用CommonJS模块规范

1. 在Node中，模块分为两类
   Node提供的模块，**为核心模块**
   用户编写的模块，**为文件模块**
   * 核心模块部分在node源代码的编译过程中，编译进了二进制执行文件。在node进行启动时，部分核心模块就被直接加载进内存中，所以这部分核心模块引入时，**文件定位和编译执行这两个步骤可以省略掉**，**并且在路径分析中优先判断**，**所以它的加载速度是最快的**。
   如：HTTP模块，URL模块，Fs模块都是nodejs内置的核心模块，可以直接引入使用。
   * 文件模块则是在运动时动态加载，需要完整的路径分析，文件定位、编译执行过程，速度相比核心模块稍微慢一些，但是用的非常多。这些模块需要我们自己定义。


2. 我们可以把公共的功能抽离成为一个单独的 js 文件作为一个模块，默认情况下面这 个模块里面的方法或者属性，外面是没法访问的。
   * 如果要让外部可以访问模块里面的方法或 者属性，就必须在模块里面通过 exports 或者 module.exports 暴露属性或者方法。
   * 在需要使用这些模块的文件中，通过 require 的方式引入这个模块。这个时候就可以 使用模块里面暴露的属性和方法。
 






 ## fs模块 
* fs.stat 检测是文件还是目录
* fs.mkdir 创建目录
* fs.writeFile 创建并写入文件
* fs.appendFile 追加写入文件
* fs.readFile 读取文件
* fs.readdir 读取目录
* fs.rename 重命名 还可以剪切
* fs.rmdir 删除目录
* fs.unlink 删除文件
* fs.createReadStream 从文件流中读取数据
* fs.createWriteStream 写入文件
* pipe 管道
* 找出html目录下所有目录并打印出来
* js函数-自执行函数
  
  ### 代码部分

 ```javaScript
const fs = require('fs');

// fs.stat 检测是文件还是目录
fs.stat('hello.js', (err, stats) => {
    if (err) {
        console.log(err);
    } else {
        console.log(stats);
        console.log(`文件: ${stats.isFile()}`); //此处要使用back ticks
        console.log(`文件: ${stats.isDirectory()}`); //此处要使用back ticks
    }
});

// fs.mkdir 创建目录
fs.mkdir('logs', (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('目录创建成功');
    }

});

//fs.writeFile 创建并写入文件

fs.writeFile('logs/test.log', 'fuck u !', (err) => {
    if (err) {
        console.log(err);

    } else {
        console.log('写入成功');

    }
});

// fs.appendFile 追加写入文件

fs.appendFile('logs/test.log', 'fuck u again!', (err) => {
    if (err) {
        console.log(err);

    } else {
        console.log('追加写入成功');

    }
})

//fs.readFile 读取文件

fs.readFile('logs/test.log', 'utf8', (err, data) => { //options encoding = utf8
    if (err) {
        console.log(err);

    } else {
        console.log(data);

    }
})

//fs.readdir 读取目录

fs.readdir('logs', (err, file) => { //options encoding = utf8
    if (err) {
        console.log(err);

    } else {
        console.log(file);

    }
})

//fs.rename 重命名 还可以剪切
//
//fs.rmdir 删除目录 只能删除目录


//fs.unlink 删除文件

fs.unlink(`logs/${file}`, (error) => {
    if (error) {
        console.log(error)
    } else {
        console.log(`成功的删除了文件: ${file}`)
    }
})


//fs.createReadStream 从文件流中读取数据

var fileReadStream = fs.createReadStream('data.json')

let count = 0;
var str = '';

fileReadStream.on('data', (chunk) => {
    console.log(`${++count} 接收到:${chunk.length}`);
    str += chunk
})

fileReadStream.on('end', () => {
    console.log('--- 结束 ---');
    console.log(count);
    console.log(str);
})

fileReadStream.on('error', (error) => {
    console.log(error)
})

//fs.createWriteStream 写入文件

var data = '我是从数据库获取的数据，我要保存起来';
// 创建一个可以写入的流，写入到文件 output.txt 中
var writerStream = fs.createWriteStream('output.txt'); // 使用 utf8 编码写入数据

writerStream.write(data, 'UTF8'); 

// 标记文件末尾
writerStream.end();
// 处理流事件 --> finish 事件
writerStream.on('finish', function () { /*finish - 所有数据已被写入到底层系统时触发。*/
    console.log("写入完 成。");
});

writerStream.on('error', function (err) {
    console.log(err.stack);
});

console.log("程序执 行完毕");


//pipe 管道

// 创建一个可读流
var readerStream = fs.createReadStream('input.txt'); 
// 创建一个可写流
var writerStream = fs.createWriteStream('output.txt');

readerStream.pipe(writerStream);

console.log('程序执行完毕');


 ```

 ```javaScript
 

const fs = require('fs');

// 找出html目录下所有目录并打印出来
var filesArray = [];
fs.readdir('html', (err, files) => {
    if (err) {
        console.log(err);

    } else {
        //判断数组files 里面的数据是目录还是文件
        //错误写法是用for loop + fs.stat 来进行判断，因为fs.stat是个异步函数
        //错误写法
        // for (let index = 0; index < files.length; index++) {

        //     fs.stat(files[index], (err, stats) => {
        //         if (err) {
        //             console.log(err);

        //         }
        //         console.log(stats.isDirectory);
        // })

        // }
        //正确写法
        //需要用匿名函数来先获取html下所有文件和目录，然后存放到另外一个数组中，然后再做判断
        (function getFile(i) {
            if (i == files.length) {
                console.log('目录：');
                console.log(filesArray);
                return false
            }
            fs.stat('html/' + files[i], (err, stats) => {
                if (err) {
                    console.log(err);

                } else {
                    console.log(stats);

                    if (stats.isDirectory()) {
                        // console.log('1');

                        filesArray.push(files[i]);
                    }
                    getFile(i + 1);
                }
            })
        })(0);//自执行函数，即定义和调用合为一体。
        // 常见格式
        // (function() { /* code */ })();
        //第一个传递进去的值是0
    }
})
 ```