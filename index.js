import { createYoga } from 'graphql-yoga';
import { createServer } from "http";
import { makeExecutableSchema } from "@graphql-tools/schema";
import {typeDefs} from './src/graphql/typeDefs'
import {resolvers} from './src/graphql/resolvers'

// Crear el esquema GraphQL
const schema = makeExecutableSchema({
    typeDefs,
  resolvers,
});

// Crear la instancia de Yoga
const yoga = createYoga({
  schema,
  graphqlEndpoint: "/",
  landingPage: false, // Desactiva la página de inicio en 404
});


// Crear el servidor HTTP y pasar Yoga como manejador
const server = createServer(yoga);

// Escuchar en el puerto 3000
server.listen(5000, () => {
  console.log("🚀 Server ready at http://localhost:5000/");
});
