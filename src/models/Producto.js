const { DataTypes } = require('sequelize');
const sequelize = require('../database/db'); // Asegúrate de que este archivo exporta la instancia de Sequelize

export const Producto = sequelize.define('Producto', {
  id_producto: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.TEXT,
    allowNull: true, // Opcional
  },
  id_categoria: {
    type: DataTypes.INTEGER,
    allowNull: true, // Opcional según la definición SQL
    references: {
      model: 'Categoria', // Nombre del modelo relacionado
      key: 'id_categoria',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  },
  precio_unitario: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  cantidad: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  id_proveedor: {
    type: DataTypes.INTEGER,
    allowNull: true, // Opcional según la definición SQL
    references: {
      model: 'Proveedor', // Nombre del modelo relacionado
      key: 'id_proveedor',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  },
}, {
  tableName: 'producto', // Nombre exacto de la tabla en la base de datos
  timestamps: false, // Si no tienes columnas createdAt y updatedAt
});

