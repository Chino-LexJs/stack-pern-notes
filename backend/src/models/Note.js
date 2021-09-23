const { Sequelize } = require("sequelize");
const sequelize = require("../database");

const notes = sequelize.define(
  "notes",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    title: {
      type: Sequelize.TEXT,
    },
    content: {
      type: Sequelize.TEXT,
    },
    users_id: {
      type: Sequelize.INTEGER,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = notes;