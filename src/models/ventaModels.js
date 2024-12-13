import { DataTypes } from 'sequelize';
import {sequelize} from '../database/dbConfig.js';// Asegúrate de que este archivo exporta la instancia de Sequelize

export const Venta = sequelize.define('Venta', {
  id_venta: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  id_cliente: {
    type: DataTypes.INTEGER,
    allowNull: true, // Opcional según la definición SQL
    references: {
      model: 'Cliente', // Nombre del modelo relacionado
      key: 'id_cliente',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  },
  fecha_venta: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  total: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
}, {
  tableName: 'venta', // Nombre exacto de la tabla en la base de datos
  timestamps: false, // Si no tienes columnas createdAt y updatedAt
});

