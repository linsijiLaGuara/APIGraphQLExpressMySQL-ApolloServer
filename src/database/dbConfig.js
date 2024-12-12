const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres'
});

sequelize
  .authenticate()
  .then(() => console.log('Conexion establecida  con db'))
  .catch((error) => console.log('Error al conectar ', error))
module.exports = sequelize;