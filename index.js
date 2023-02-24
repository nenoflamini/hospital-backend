const express = require('express');
require('dotenv').config();
const { dbConnection } = require('./database/config');
const cors = require('cors')

//crear el sv de express
const app = express();

// Configurar cors
app.use( cors() );

//Base de datos
dbConnection();


//rutas
app.get( '/', (req, res) => {
    
    res.json({
        ok: true,
        msg: 'Hola Mundo'
    })

} );

app.listen( process.env.PORT, () => {
    console.log('Servidor corriendo en puerto ' + process.env.PORT);
} );