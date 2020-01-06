const http = require('http')
let localData = '';
http.get({
  'host': 'localhost',
  'port': '8000'
}, function(res) {
  console.log(res)
  res.on('data', function(chunk){
    localData += chunk
  })
  res.on('end', function(chunk){
    console.log(localData)
  })
}).end()