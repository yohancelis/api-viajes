const { Router } = require('express'); //Desestructuración. Extraer un atributo de un objeto.

const route = Router()

//Importar métodos del controlador
const { viajesGet, viajesPost, viajesPut, viajesDelete, viajesGetByCiudadOrigen,  } = require('../controllers/viajes')

route.get('/', viajesGet)

route.post('/', viajesPost)

route.put('/', viajesPut)

route.delete('/', viajesDelete)

route.get('/ciudad/:ciudadOrigen', viajesGetByCiudadOrigen);


module.exports = route