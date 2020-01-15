const fs = require('fs')

// 异步操作 删除文件
fs.unlink('../demo/hello.txt', (err) => {
  if(err) {
    console.log(err)
  } else {
    console.log('删除成功')
  }
})
// 同步操作
fs.unlinkSync('../demo/hello.txt') // 不存在会直接报错 建议在try catch使用

