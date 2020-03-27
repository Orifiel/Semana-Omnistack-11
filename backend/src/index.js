const express = require('express');
const cors = require('cors')
const routes = require('./routes')

const app = express();

app.use(cors())

/**Habilita a aplicação a usar o json nas requisições */
app.use(express.json()) 

app.use(routes)

/**
 * Tipos de Parametros
 * 
 * Query: parametros nomeados enviados na rota após ?(filtros, paginação)
 * Route: identifica recursos 
 * Request Body: Corpo da Requisição, utilizado para criar ou alterar recursos
 * 
 */

 /**
  * SQL: Mysql, SQlite, PostgreSQL, Oracle, MS SQL Server
  * NoSQL: MongoDB, CouchDB, etc
  */

/**
 * Driver: SELECT * FROM users
 * Query Builder: table('user').select('*').where()
 */



app.listen(3333);