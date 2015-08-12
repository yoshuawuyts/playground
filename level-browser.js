const levelws = require('level-write-stream')
const sublevel = require('level-sublevel')
const fromArray = require('from2-array')
const through = require('through2')
const pumpify = require('pumpify')
const memdb = require('memdb')
const pump = require('pump')

const db = sublevel(memdb('/tmp/level-browser'))
const sub = db.sublevel('carrots')

const src = fromArray.obj([{foo: 'bar'}])
const log = through.obj(function (chunk, enc, cb) {
  console.log(chunk)
  cb()
})

// main methods are {put,get,del}
const ws = levelws(sub)

const logAndWrite = pumpify(log, ws)

pump(src, logAndWrite, function (err, res) {
  if (err) console.error(err)
  pump(sub.createReadStream(), through.obj(log), function (err, res) {
    if (err) console.error(err)
  })

  function log (chunk, enc, cb) {
    console.log(chunk)
    cb()
  }
})
