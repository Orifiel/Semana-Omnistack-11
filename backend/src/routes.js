const express = require('express')

const OngControllers = require('./controllers/OngController')
const IncidentsController = require('./controllers/IncidentsController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

const routes = express.Router()

routes.post('/sessions', SessionController.create)

/** lista as ongs criadas */
routes.get('/ongs', OngControllers.index)

/** insere uma nova ong */ 
routes.post('/ongs', OngControllers.create)

/** lista todos os casos de uma Ong */
routes.get('/profile', ProfileController.index)

/** lista as incidentes criadas*/
routes.get('/incidents', IncidentsController.index)

/** insere um novo incidente */
routes.post('/incidents', IncidentsController.create)
routes.delete('/incidents/:id',IncidentsController.delete)


module.exports = routes