import { Sequelize } from "sequelize";


if (!process.env.DATABASE_URL) {
  throw new Error("La variable de entorno DATABASE_URL no está definida.");
}
const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",
  protocol: "postgres",
  logging: false, // Puedes cambiar a `true` si quieres ver las consultas en consola
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false, // Cambia esto según la configuración de tu servidor
    },
  },
});

export { sequelize };
