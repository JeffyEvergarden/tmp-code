const http = require('http');
const server = new http.Server();
server.on('request', function(req, res) {
  let data = '';
  req.on('data',function(chunk) {
    data +=chunk;
  })
  req.on('end', function() {
    let method = req.method;
    let url = req.url;
    let headers = JSON.stringify(req.headers)
    // 以下几行代码写在外面无效
    res.writeHead(200, {
      'content-type': 'text/plain'
    })
    res.end(data +'  '+ method +' ' + url  + ' ' + headers )
  })
})

// http.createServer(fn) 等同于 ===> new http.Server(fn) 在request事件中加入fn回调函数  
server.listen(8000, function() {
  console.log('listening port 8000')
})