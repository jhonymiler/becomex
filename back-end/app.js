
const apicache = require( 'apicache-plus' )
const express = require( 'express' )
const axios = require( "axios" ).default
const cors = require( 'cors' )
require( 'dotenv/config' )

axios.defaults.baseURL = process.env.API_URL;
axios.defaults.headers = {
    'Content-Type': 'application/json'
};

var app = express()
app.use( cors() )
app.use( apicache( process.env.CACHE ) )

app.use( '/', require( './src/routes/index.route.js' ) )

// Set a port for the app to listen on
const PORT = process.env.PORT || 5000;

app.listen( PORT, function () {
    console.log( `Rodando na porta: ${ PORT }. Press CTRL+C para sair.` )
} );
