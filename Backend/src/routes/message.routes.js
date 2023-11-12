const express = require("express");
const router = express.Router();

const MessageController = require("../controllers/message.controller");
const verifyToken = require("../middlewares/verifyToken");

router.post("/mensaje/:id", verifyToken, MessageController.saveMessage);

router.get("/mensajes-recibidos", verifyToken, MessageController.getReceivedMessages);

router.get("/mensajes-emitidos", verifyToken, MessageController.getEmitMessages);

router.get("/mensajes", verifyToken, MessageController.getAllMessages);

module.exports = router;