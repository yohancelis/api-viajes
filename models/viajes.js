const { Schema, model } = require('mongoose')
const ViajesSchema = Schema({
    codigo: {
        type: String,
        required: [true, 'El codigo es obligatorio!']
    },
    ciudadOrigen: {
        type: String,
        required: [true, 'La ciudad de Origen es obligatoria!']
    },
    Ciudaddestino: {
        type: String,
        required: [true, 'La Ciudad de destino es obligatoria!']
    },
    precioPesos: {
        type: String,
        required: [true, 'El precio en Pesos es obligatorio!']
    },
    cantidadPasajeros: {
        type: String,
        required: [true, 'La cantidad de Pasajeros es obligatorio!']
    }
})
module.exports = model('Viajes', ViajesSchema)