const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const usersRouter = require("./routes/users");
const notesRouter = require("./routes/notes");
const app = express();

// settings

// middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/api/users", usersRouter);
app.use("/api/notes", notesRouter);

module.exports = app;
