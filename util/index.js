const util = require('util')

let obj = {
  keyword: 'node.js',
  name: 'jeffy liang'
}
let str = util.inspect(obj)

console.log(str)
// util.isArray()