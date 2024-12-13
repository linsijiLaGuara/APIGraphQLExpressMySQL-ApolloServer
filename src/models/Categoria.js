const { DataTypes } = require('sequelize');
const sequelize = require('../database/db'); // Asegúrate de que `db.js` exporta tu instancia de Sequelize

const Categoria = sequelize.define('Categoria', {
  id_categoria: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre_categoria: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.STRING,
  },
}, {
  tableName: 'categoria', // Nombre de la tabla en la base de datos
  timestamps: false, // Si no tienes columnas de timestamps
});

module.exports = Categoria;
