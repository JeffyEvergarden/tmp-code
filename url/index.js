const url =require('url')

let parseUrl = 'https://www.google.com/?q=node.js'
let urlObj = url.parse(parseUrl)
console.log(urlObj) // 输出编号01

let urlAddress = url.resolve('https://www.google.com', '/image')
let urlAddress2 = url.resolve('https://www.google.com', '/image', '../')
// url.resolve(from, to)
console.log(urlAddress) // https://www.google.com/image
console.log(urlAddress2) // https://www.google.com/image
// 输出编号01
// Url {
//   protocol: 'https:',
//   slashes: true,
//   auth: null,
//   host: 'www.google.com',
//   port: null,
//   hostname: 'www.google.com',
//   hash: null,
//   search: '?q=node.js',
//   query: 'q=node.js',
//   pathname: '/',
//   path: '/?q=node.js',
//   href: 'https://www.google.com/?q=node.js' }