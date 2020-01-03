const http = require('http');
const server = new http.Server();
server.on('request', function(req, res) {
  res.writeHead(200, {
    'content-type': 'text/plain'
  })
  res.end('hello FUCK.js')
})

// 没有输出 （不知道为啥）
server.on('connect', function(socket) {
  console.log('服务器连接')
  console.log(socket)
})
// 没有输出 （不知道为啥）
server.on('close', function() {
  console.log('服务器关闭')
})

// http.createServer(fn) 等同于 ===> new http.Server(fn) 在request事件中加入fn回调函数  
server.listen(8000, function() {
  console.log('listening port 8000')
})