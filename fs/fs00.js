const fs = require('fs')

fs.stat('../demo/fuck.txt', (err, stat) => {
  console.log(stat)
})

/*
Stats {
  dev: 649009013,
  mode: 33206,
  nlink: 1,
  uid: 0,
  gid: 0,
  rdev: 0,
  blksize: undefined,
  ino: 1970324837567238,
  size: 133,
  blocks: undefined,
  atimeMs: 1578296048273.7659,
  mtimeMs: 1578296059856.4282,
  ctimeMs: 1578296913196.2366,
  birthtimeMs: 1578296048273.7659,
  atime: 2020-01-06T07:34:08.274Z,
  mtime: 2020-01-06T07:34:19.856Z,
  ctime: 2020-01-06T07:48:33.196Z,
  birthtime: 2020-01-06T07:34:08.274Z }
  */