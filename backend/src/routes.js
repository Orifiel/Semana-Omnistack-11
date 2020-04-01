const express = require('express')
const { celebrate, Segments, Joi } = require('celebrate')

const OngControllers = require('./controllers/OngController')
const IncidentsController = require('./controllers/IncidentsController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

const routes = express.Router()

routes.post('/sessions', SessionController.create)

/** lista as ongs criadas */
routes.get('/ongs', OngControllers.index)

/** insere uma nova ong */ 
/** validando os campos com celebrate */
routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2),
    })
}),OngControllers.create)

/** lista todos os casos de uma Ong */
routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({ 
        authorization: Joi.string().required()
    }).unknown(), 
}), ProfileController.index)

/** lista as incidentes criadas*/
routes.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
    })
}),IncidentsController.index)

/** insere um novo incidente */
routes.post('/incidents', IncidentsController.create)



routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
    })
}), IncidentsController.delete)


module.exports = routes