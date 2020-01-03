const http = require('http');
const server = http.createServer(function(req,res) {
  res.writeHead(200, {
    'content-type': 'text/plain'
  })
  res.end('hello node.js')
})
server.listen(8000, function() {
  console.log('listening port 8000')
})