const { Sequelize } = require("sequelize");
const sequelize = require("../database/db");

import { Categoria } from "./categoriaModels.js";
import { Proveedor } from "./proveedorModels.js";
import { Producto } from "./productoModels.js";
import { Cliente } from "./clienteModels.js";
import { Venta } from "./ventaModels.js";
import { DetalleVenta } from "./detalleVentaModels.js";

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
