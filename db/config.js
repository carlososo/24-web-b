const mongoose = require('mongoose');

class Database {
  constructor(){
    this.connection = process.env.MONGO_CNN_DEV
  }
  async dbConnection(){
    try {
      await mongoose.connect(this.connection, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      })
      console.log("Conectados a la Base de Datos")
      
    } catch (error) {
      console.log(error);
      throw new Error('Error a la hora de conectarse a la base de datos')
    }
  }
}

module.exports = Database