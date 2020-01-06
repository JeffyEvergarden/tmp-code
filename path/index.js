const path = require('path')

// path.join() 将所有参数连接起来
let outputpath = path.join(__dirname, 'node', 'node.js')
console.log(outputpath)

let outputpath2 = path.join(__dirname, 'node', '../node/fake')
let outputpath3 = path.join(__dirname, 'node', '../node/fake.js', '../fuck.js')

console.log(outputpath2)
console.log(outputpath3)

// j:\learn-code\tmp-code\path\node\node.js
// j:\learn-code\tmp-code\path\node\fake
// j:\learn-code\tmp-code\path\node\fake.js\fuck.js

// path.extname() 返回路径的拓展名。无拓展时返回的空字符
console.log(path.extname(outputpath))
// .js
console.log('\r')
// path.parse() 将路径返回一个对象 包括五个参数
console.log(path.parse(outputpath))

/*
    { root: 'j:\\',
      dir: 'j:\\learn-code\\tmp-code\\path\\node',
      base: 'node.js',
      ext: '.js',
      name: 'node' }
*/
/*
    /n和/r（换行符和回车符）区别

    介绍
    换行符/n本意是从光标处跳到下一行，注意不一定是跳到下一行的开头
    回车符/r本意是从光标处跳到所在行的开头，注意还在当前行
    Enter键在操作系统中的区别
    windows系统中用的是本意，即/n/r合起来使用
    OS系统中（Mac）没有/n，只用/r回车符表示回到开头并跳到下一行
    Linux系统中没有/r，只用/n换行符表示跳到下一行并回到开头
*/