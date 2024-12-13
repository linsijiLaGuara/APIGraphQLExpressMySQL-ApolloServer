const { Sequelize } = require("sequelize");
const sequelize = require("../database/db");

import { Categoria } from "./Categoria.js";
import { Proveedor } from "./Proveedor.js";
import { Producto } from "./Producto.js";
import { Cliente } from "./Cliente.js";
import { Venta } from "./Venta.js";
import { DetalleVenta } from "./DetalleVenta.js";

// Relaciones
Producto.belongsTo(Categoria, { foreignKey: "id_categoria" });
Producto.belongsTo(Proveedor, { foreignKey: "id_proveedor" });
Venta.belongsTo(Cliente, { foreignKey: "id_cliente" });
DetalleVenta.belongsTo(Venta, { foreignKey: "id_venta" });
DetalleVenta.belongsTo(Producto, { foreignKey: "id_producto" });

export default (sequelize,
  Categoria,
  Proveedor,
  Producto,
  Cliente,
  Venta,
  DetalleVenta);
