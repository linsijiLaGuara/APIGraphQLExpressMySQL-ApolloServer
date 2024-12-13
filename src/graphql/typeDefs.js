
import { gql } from "graphql-tag";

//difinicion el squela graphql
export const typeDefs = gql`

  type Query {
  ping: String!
    Categorias: [Categoria]!
    Proveedores: [Proveedor]!
   Productos: [Producto]!
    Clientes: [Cliente]!
    Ventas: [Venta]!
    DetallesVenta: [DetalleVenta]!
  }

  type Categoria {
    id_categoria: ID!
    nombre_categoria: String!
    descripcion: String!
  }

  type Proveedor {
    id_proveedor: ID!
    nombre: String!
    telefono: String!
    email: String!
    direccion: String!
  }

  type Producto {
    id_producto: ID!
    nombre: String!
    descripcion: String!
    id_categoria: Int!
    precio_unitario: Float!
    cantidad: Int!
    id_proveedor: Int!
  }

  type Cliente {
    id_cliente: ID!
    nombre: String!
    telefono: String!
    email: String!
    direccion: String!
  }

  type Venta {
    id_venta: ID!
    id_cliente: Int!
    fecha_venta: String!
    total: Float!
  }

  type DetalleVenta {
    id_detalle: ID!
    id_venta: Int
    id_producto: Int
    cantidad: Int!
    precio_unitario: Float!
    subtotal: Float!
  }



  input CategoriaInput {
    nombre_categoria: String!
    descripcion: String
  }

  input ProveedorInput {
    nombre: String!
    telefono: String
    email: String
    direccion: String
  }

  input ProductoInput {
    nombre: String!
    descripcion: String
    id_categoria: Int
    precio_unitario: Float!
    cantidad: Int!
    id_proveedor: Int
  }

  input ClienteInput {
    nombre: String!
    telefono: String
    email: String
    direccion: String
  }

  input VentaInput {
    id_cliente: Int
    fecha_venta: String!
    total: Float!
  }

  input DetalleVentaInput {
    id_venta: Int
    id_producto: Int
    cantidad: Int!
    precio_unitario: Float!
    subtotal: Float!
  }

  type Mutation {
    createCategoria(input: CategoriaInput): Categoria
    createProveedor(input: ProveedorInput): Proveedor
    createProducto(input: ProductoInput): Producto
    createCliente(input: ClienteInput): Cliente
    createVenta(input: VentaInput): Venta
    createDetalleVenta(input: DetalleVentaInput): DetalleVenta
  }
`;

