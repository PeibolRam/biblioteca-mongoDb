// 1. IMPORTACIONES
const mongoose = require("mongoose")

// 2. SCHEMA / ESQUEMA
const libroSchema = mongoose.Schema({
    idLibro: {
        type: String
    },
    titullo: {
        type: String
    },
    paginas: {
        type: Number
    },
    descripcion:{
        type: String
    }
})

// 3. CREACIÓN DEL MODELO
// mongoose.model("el nombre del modelo en singular", schema de arriba, "nombre de la colección")
const Libro = mongoose.model("libro", libroSchema, "librosDeProgramacion")

// 4. EXPORTACIÓN
module.exports = { Estudiante }