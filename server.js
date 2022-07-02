const jsonServer = require('json-server')
const resources = require('./models')

const server = jsonServer.create()
const router = jsonServer.router(resources)
const middlewares = jsonServer.defaults()

server.use((req, res, next) => {
  req.query._limit = 25
  next()
})

server.use(middlewares)
server.use(router)

const { SERVER_PORT = 8000 } = process.env

server.listen(SERVER_PORT, () => console.log('Server is running on port', SERVER_PORT))
