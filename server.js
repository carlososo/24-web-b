const express = require('express');
const cors = require('cors');
const Database = require('./db/config');
const { errors } = require("celebrate");

class Server {
  constructor(){
    this.app = express();
    this.port = process.env.PORT || 3001;
    this.database = new Database();
    this.usersPath = '/api/usuarios';
    this.servicePath = '/api/services';
    this.registerPath = '/api/auth';
    //Middlewares
    this.middlewares();
    //Database connection
    this.dbConnection();
    //Rutas
    this.router();
  }

  async dbConnection(){
    await this.database.dbConnection();
  }

  middlewares(){
    this.app.use(cors());
    //Este Middleware sirve para recibir datos
    this.app.use(express.json());
    this.app.use(express.urlencoded({extended:false}));
    //Public 
    this.app.use(express.static('public'))
  }

  router(){
    this.app.use(this.usersPath, require('./routes/users.routes'), errors())
    this.app.use(this.servicePath, require('./routes/services.routes'))
    this.app.use(this.registerPath, require('./routes/register.routes'))
  }

  listen(){
    this.app.listen(this.port, ()=>{
      console.log(`Esta Aplicacion corre en el puerto ${this.port}`)
    })
  }
}

module.exports = Server