const jsonServer = require('json-server')
const resources = require('./models')

const app = jsonServer.create()
const router = jsonServer.router(resources)
const middlewares = jsonServer.defaults()

app.use((req, res, next) => {
  req.query._limit = 25
  next()
})

app.use(middlewares)
app.use(router)

const { SERVER_PORT = 5000 } = process.env

app.listen(SERVER_PORT, () => console.log('Server is running on port', SERVER_PORT))

module.exports = app;