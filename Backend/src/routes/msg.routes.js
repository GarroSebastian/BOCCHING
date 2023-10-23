const express = require("express");
const router = express.Router();

const MensajeController = require("../controllers/mensaje.controller");
const verifyToken = require("../middlewares/verifyToken");

// Ruta para enviar un mensaje
router.post("/send-message/:id", verifyToken, MensajeController.saveMensaje);


module.exports = router;