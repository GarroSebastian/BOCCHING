const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");

const UserRoutes = require("./routes/user.routes");
const RequestRoutes = require("./routes/request.routes");

const app = express();

//middlewares
app.use(morgan("dev"));
app.use(express.json({limit: '10mb'}));
app.use(express.urlencoded({ extended: true, limit: '10mb'}));

app.use(express.static(path.resolve("public")));

//cors
const corsOptions = {
  origin: 'http://localhost:3000',
  allowedHeaders: ['Content-Type', 'Authorization'],
  methods: 'GET,POST,PUT,DELETE'
};
app.use(cors(corsOptions));

//rutas
app.use(UserRoutes);
app.use(RequestRoutes);

module.exports = app;