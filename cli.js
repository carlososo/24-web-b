require('dotenv').config();
const Database = require('./db/config');
const User = require('./models/usersModel')

const repl = require('repl');

const saludar = () => {
  console.log("Hola!")
}

const database = new Database();
database.dbConnection();

const replServer = repl.start();
replServer.context.saludar = saludar;
replServer.context.User = User;
replServer.context.db = database;