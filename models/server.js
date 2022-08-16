const express = require('express');
const cors    = require('cors');



class Server {


    /*========== CONSTRUCTOR ==========*/
    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        this.usuariosPath = '/api/usuarios';

        this.middlewares();
        this.routes();
    }
    

    middlewares() {

        // CORS
        this.app.use( cors() );

        // Lectura y parseo
        this.app.use( express.json() );

        // Directorio público
        this.app.use( express.static('public') )

    }


    /*========== ROUTES ==========*/
    routes() {
        
        this.app.use(this.usuariosPath, require('../routes/usuarios'));

    }


    /*========== LISTEN ==========*/
    listen() {
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en el puerto ', this.port);
        });
    }


}



module.exports = Server;