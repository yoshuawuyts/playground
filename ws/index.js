const websocket = require('websocket-stream')
const summary = require('server-summary')
const http = require('http')

const server = http.createServer(function (req, res) {
  res.end('nope')
})
server.listen(1337, summary(server))

const opts = { server: server }
websocket.createServer(opts, function (writeStream) {
  writeStream.end(JSON.stringify({ hello: 'world' }))
})
