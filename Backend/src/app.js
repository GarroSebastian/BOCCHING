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
const corsOptions = {
    origin: 'http://localhost:3000',
    allowedHeaders: ['Content-Type', 'Authorization'], // Agrega 'Content-Type' a los encabezados permitidos
  };
app.use(cors(corsOptions));

//rutas
app.use(UserRoutes);

module.exports = app;