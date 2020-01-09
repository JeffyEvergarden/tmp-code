// node的文件模块只有四个类
// fs.ReadStream  读流
// fs.Stats  文件信息
// fs.WriteStream 写流
// fs.FSWatcher（获取文件信息）

// fs.open(path, flag[, mode], callback)

const fs = require('fs')

// 异步模式打开文件
fs.open('../demo/fuck.txt', 'r+', function(err, fd) {
  console.log(fd) // 输出了一个数字 3 （？？？）
})

// 关闭文件 fs.close 和 fs.closeSync
// fs.close(fd, callback) // fd是个序号 通过这个序号可以关闭文件