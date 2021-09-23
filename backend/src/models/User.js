const { Sequelize } = require("sequelize");
const sequelize = require("../database");
const notes = require("./Note");

const users = sequelize.define(
  "users",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
    },
  },
  {
    timestamps: false,
  }
);

users.hasMany(notes, { foreignKey: "users_id", sourceKey: "id" });
notes.belongsTo(users, { foreignKey: "users_id", sourceKey: "id" });

module.exports = users;
