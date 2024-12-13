import { DataTypes } from 'sequelize';
import {sequelize} from '../database/dbConfig.js'; // Asegúrate de que este archivo exporta la instancia de Sequelize

export const DetalleVenta = sequelize.define('DetalleVenta', {
  id_detalle: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  id_venta: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Venta', // Debe coincidir con el nombre del modelo relacionado
      key: 'id_venta',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
  id_producto: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Producto', // Debe coincidir con el nombre del modelo relacionado
      key: 'id_producto',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
  cantidad: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  precio_unitario: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  subtotal: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
}, {
  tableName: 'detalle_venta', // Nombre de la tabla en la base de datos
  timestamps: false, // Si no tienes columnas createdAt y updatedAt
});


