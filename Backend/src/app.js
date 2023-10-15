const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");

const UserRoutes = require("./routes/user.routes");

const app = express();

//middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

app.use(express.static(path.resolve("public")));

//cors
app.use(cors());

//rutas
app.use(UserRoutes);

module.exports = app;