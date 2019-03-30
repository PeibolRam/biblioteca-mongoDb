// 1. Importaciones
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")


// 2. "Middlewares"
// a. Express
const app = express()
app.use(express.json())

app.use(cors())

// b. Mongo
mongoose.connect("mongodb://localhost:27017/biblioteca")

// 3. Modelos
const { Libro } = require('./models/libro')



// 4. Rutas

//Ruta de todos los libros 
app.get("/libros", (req, res) => {
    Libro.find({}).then(datosdelibros => {
        
        res.send(datosdelibros)
    })   
})

//Ruta de un solo libro 
app.get("/libros/:idLibro", (req, res) => {
    const libroABuscar = req.params.idLibro

    Libro.find({idLibro:libroABuscar}).then(libro => {
        res.send(libro)
    })
})


// 5. Listener (Switch prendido)
app.listen(3002,() => {
    console.log("Estamos conectados al puerto 3002")
})