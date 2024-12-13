import { DataTypes } from 'sequelize';
import {sequelize} from '../database/dbConfig.js'; // Asegúrate de que `db.js` exporta tu instancia de Sequelize

export const Cliente = sequelize.define('Cliente', {
  id_cliente: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  telefono: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  direccion: {
    type: DataTypes.STRING,
  },
}, 


{
  tableName: 'cliente', // Nombre de la tabla en la base de datos
  timestamps: false, // Si no tienes columnas de timestamps
});

