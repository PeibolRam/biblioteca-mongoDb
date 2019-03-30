// 1. Importaciones
const express = require("express")
const mongoose = require("mongoose")


const app = express()

// 2. "Middlewares"


// 3. Modelos

// 4. Rutas


// 5. Listener (Switch prendido)
app.listen(3002,() => {
    console.log("Estamos conectados al puerto 3002")
})