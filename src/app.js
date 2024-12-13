import { createYoga } from "graphql-yoga";
import { createServer } from "http";
import { schema } from "./graphql/squema"; // Importa tu esquema correctamente

// Configura el servidor de Yoga
const yoga = createYoga({
  schema,
  graphqlEndpoint: "/", // Endpoint de GraphQL
  landingPage: false, // Desactiva la página interactiva de inicio
});

// Crea el servidor HTTP y pasa Yoga como manejador
const server = createServer(yoga);

module.exports = server;
