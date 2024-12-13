import { Categoria } from "../models/categoriaModels.js";
import { Proveedor } from "../models/proveedorModels.js";
import { Producto } from "../models/productoModels.js";
import { Cliente } from "../models/clienteModels.js";
import { Venta } from "../models/ventaModels.js";
import { DetalleVenta } from "../models/detalleVentaModels.js";
export const resolvers = {
  Query: {
    ping() {
      return 'pong'
    },
    Categorias() {
      return Categoria;
    },
    Proveedores() {
      return Proveedor;
    },
    Productos() {
      return Producto;
    },
    Clientes() {
      return Cliente;
    },
    Ventas() {
      return Venta;
    },
    DetallesVenta() {
      return DetalleVenta;

    },
  },

  };

