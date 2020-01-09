const path = require('path')

// path.normalize
var newPath = path.normalize('.//foo/fake//nmsl/helo//aaskdjask')
console.log('新地址')
console.log(newPath)
// 输出 foo\fake\nmsl\helo\aaskdjask
console.log('-----------end')