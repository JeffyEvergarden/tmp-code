const dns = require('dns')

let domain = 'bilibili.com'

dns.resolve(domain, function(err, address) {
  console.log('resolve:')
  console.log(err)
  console.log('----------------')
  console.log(address)
})

dns.lookup(domain, function(err, address) {
  console.log('lookup:')
  console.log(err)
  console.log('----------------')
  console.log(address)
})

let dnsAddress = '114.114.114.114'

dns.reverse(dnsAddress, function(err, address) {
  console.log('dnsAddress:')
  console.log(err)
  console.log('----------------')
  console.log(address)
})