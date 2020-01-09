const fs = require('fs')

// 重命名
// 有移动文件的能力
fs.rename('../demo/fake.txt', '../demo/fuck.txt', (err) => {
  if(err) {
    console.log(err)
  } else {
    console.log('-----重命名成功')
  }
  fs.stat('../demo/fuck.txt', (err, stat) => {
    console.log(stat)
  })
})

