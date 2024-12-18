import { createYoga } from "graphql-yoga";
import { createServer } from "http";
import schema from "./graphql/schema.js"; // Importa tu esquema correctamente

// Configura el servidor de Yoga
const yoga = createYoga({
  schema,
  graphqlEndpoint: "/graphql", // Endpoint de GraphQL
  landingPage: false, // Desactiva la página interactiva de inicio
});

// Crea el servidor HTTP y pasa Yoga como manejador
const server = createServer(yoga);

export default server;
