const { Sequelize } = require("sequelize");
const sequelize = require("../database/db");

const Categoria = require("./Categoria");
const Proveedor = require("./Proveedor");
const Producto = require("./Producto");
const Cliente = require("./Cliente");
const Venta = require("./Venta");
const DetalleVenta = require("./DetalleVenta");

// Relaciones
Producto.belongsTo(Categoria, { foreignKey: "id_categoria" });
Producto.belongsTo(Proveedor, { foreignKey: "id_proveedor" });
Venta.belongsTo(Cliente, { foreignKey: "id_cliente" });
DetalleVenta.belongsTo(Venta, { foreignKey: "id_venta" });
DetalleVenta.belongsTo(Producto, { foreignKey: "id_producto" });

module.exports = {
  sequelize,
  Categoria,
  Proveedor,
  Producto,
  Cliente,
  Venta,
  DetalleVenta,
};
