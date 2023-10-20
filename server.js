const express = require('express');
const cors = require('cors');
const Database = require('./db/config');

class Server {
  constructor(){
    this.app = express();
    this.port = process.env.PORT || 3001;
    this.database = new Database();
    //Middlewares
    this.middlewares();
    //Database connection
    this.dbConnection();
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

  listen(){
    this.app.listen(this.port, ()=>{
      console.log(`Esta Aplicacion corre en el puerto ${this.port}`)
    })
  }
}

module.exports = Server