import { Categoria } from "../models/categoriaModels.js";
import { Proveedor } from "../models/proveedorModels.js";
import { Producto } from "../models/productoModels.js";
import { Cliente } from "../models/clienteModels.js";
import { Venta } from "../models/ventaModels.js";
import { DetalleVenta } from "../models/detalleVentaModels.js";
export const resolvers = {
  Query: {
    ping() {
      return "pong";
    },
    Categorias: async () => {
      try {
        const categorias = await Categoria.findAll(); // Ejecuta la consulta
        return categorias; // Devuelve los resultados como un array
      } catch (error) {
        console.error("Error al obtener categorías:", error);
        throw new Error("No se pudieron obtener las categorías.");
      }
    },

    Proveedores: async () => {
      try {
        const proveedores = await Proveedor.findAll(); // Consulta todos los proveedores
        return proveedores;
      } catch (error) {
        console.error("Error al obtener proveedores:", error);
        throw new Error("No se pudieron obtener los proveedores.");
      }
    },
    Productos: async () => {
      try {
        const productos = await Producto.findAll(); // Consulta todos los productos
        return productos;
      } catch (error) {
        console.error("Error al obtener productos:", error);
        throw new Error("No se pudieron obtener los productos.");
      }
    },
    Clientes: async () => {
      try {
        const clientes = await Cliente.findAll(); // Consulta todos los clientes
        return clientes;
      } catch (error) {
        console.error("Error al obtener clientes:", error);
        throw new Error("No se pudieron obtener los clientes.");
      }
    },
    Ventas: async () => {
      try {
        const ventas = await Venta.findAll(); // Consulta todas las ventas
        return ventas;
      } catch (error) {
        console.error("Error al obtener ventas:", error);
        throw new Error("No se pudieron obtener las ventas.");
      }
    },
    DetallesVenta: async () => {
      try {
        const detalles = await DetalleVenta.findAll(); // Consulta todos los detalles de venta
        return detalles;
      } catch (error) {
        console.error("Error al obtener los detalles de venta:", error);
        throw new Error("No se pudieron obtener los detalles de venta.");
      }
    },
  },
};
