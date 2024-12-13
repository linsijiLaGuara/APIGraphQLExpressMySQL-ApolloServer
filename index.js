// Este archivo simplemente importa y ejecuta el servidor configurado en src/app.js

const app = require("./src/app.js");

// Inicia el servidor
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`🚀 Server ready at http://localhost:${PORT}/`);
});
