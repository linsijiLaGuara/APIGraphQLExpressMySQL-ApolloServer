import { DataTypes } from 'sequelize';
import {sequelize} from '../database/dbConfig.js';

export const Proveedor = sequelize.define('Proveedor', {
  id_proveedor: {
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
}, {
  tableName: 'proveedor',
  timestamps: false,
});


