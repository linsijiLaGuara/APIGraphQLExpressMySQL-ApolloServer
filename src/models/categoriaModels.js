import { DataTypes } from 'sequelize';
import { sequelize } from '../database/dbConfig.js';

export const Categoria = sequelize.define('Categoria', {
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
    allowNull: false,
  },
}, {
  tableName: 'categoria',
  timestamps: false,
});
