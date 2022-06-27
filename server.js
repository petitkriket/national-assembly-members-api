const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('./db/nosdeputes.fr_deputes_en_mandat_2022-06-27.json')
const middlewares = jsonServer.defaults()
const { renameDeputyKeys } = require('./dto-rename-keys.js')

server.use(middlewares)
server.use(jsonServer.bodyParser)

router.render = (req, res) => {
    const isDeputyRelated =  req.originalMethod === 'GET' && /^\/deputies/.test(req.originalUrl)
    if (isDeputyRelated) {
        res.jsonp(renameDeputyKeys(res.locals.data))
    }
}

server.use(router)
server.listen(3000, () => console.log('JSON Server is running'))
