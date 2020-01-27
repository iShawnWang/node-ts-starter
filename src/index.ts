import http from 'http'

const server = http.createServer((req, res) => {
  console.log(req)
  res.end('emmmm')
})

server.listen(3000)

console.log('app listen http://127.0.0.1:3000')
