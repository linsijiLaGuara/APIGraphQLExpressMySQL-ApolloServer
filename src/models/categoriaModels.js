import { DataTypes } from 'sequelize';
import { sequelize } from '../database/dbConfig.js';

export const Categoria = sequelize.define('Categoria', {
  id_categoria: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'categoria',
  timestamps: false,
});
