const { Categoria, Proveedor, Producto, Cliente, Venta, Detalle_Venta } = require('./models'); // Importa tus modelos Sequelize

const resolvers = {
  Query: {
    getCategorias: async () => {
      try {
        return await Categoria.findAll();
      } catch (error) {
        throw new Error('Error al obtener las categorías');
      }
    },
    getProveedores: async () => {
      try {
        return await Proveedor.findAll();
      } catch (error) {
        throw new Error('Error al obtener los proveedores');
      }
    },
    getProductos: async () => {
      try {
        return await Producto.findAll();
      } catch (error) {
        throw new Error('Error al obtener los productos');
      }
    },
    getClientes: async () => {
      try {
        return await Cliente.findAll();
      } catch (error) {
        throw new Error('Error al obtener los clientes');
      }
    },
    getVentas: async () => {
      try {
        return await Venta.findAll();
      } catch (error) {
        throw new Error('Error al obtener las ventas');
      }
    },
    getDetallesVenta: async () => {
      try {
        return await Detalle_Venta.findAll();
      } catch (error) {
        throw new Error('Error al obtener los detalles de ventas');
      }
    },
  },
  Mutation: {
    createCategoria: async (_, { input }) => {
      try {
        return await Categoria.create(input);
      } catch (error) {
        throw new Error('Error al crear la categoría');
      }
    },
    createProveedor: async (_, { input }) => {
      try {
        return await Proveedor.create(input);
      } catch (error) {
        throw new Error('Error al crear el proveedor');
      }
    },
    createProducto: async (_, { input }) => {
      try {
        return await Producto.create(input);
      } catch (error) {
        throw new Error('Error al crear el producto');
      }
    },
    createCliente: async (_, { input }) => {
      try {
        return await Cliente.create(input);
      } catch (error) {
        throw new Error('Error al crear el cliente');
      }
    },
    createVenta: async (_, { input }) => {
      try {
        return await Venta.create(input);
      } catch (error) {
        throw new Error('Error al crear la venta');
      }
    },
    createDetalleVenta: async (_, { input }) => {
      try {
        return await Detalle_Venta.create(input);
      } catch (error) {
        throw new Error('Error al crear el detalle de venta');
      }
    },
  },
};

module.exports = resolvers;