const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  "pernstack", // nombre base de deatos
  process.env.DB_USER, // nombre usuario
  process.env.DB_PASS, // contraseña
  {
    // config para sequelize
    host: "localhost",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      require: 30000,
      idle: 10000,
    },
    logging: false,
  }
);

module.exports = sequelize;