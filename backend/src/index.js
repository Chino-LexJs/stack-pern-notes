require("dotenv").config();
const app = require("./app");
const sequelize = require("./database");
const port = process.env.PORT;

// prueba de conexion database
async function pool() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}
pool();

async function main() {
  await app.listen(port);
  console.log(`Server on port: ${port}`);
}

main();
