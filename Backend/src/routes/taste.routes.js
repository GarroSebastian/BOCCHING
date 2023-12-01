const express = require("express");
const router = express.Router();

const TasteController = require("../controllers/taste.controller");
const verifyToken = require("../middlewares/verifyToken");

//rutas
router.post("/save-gusto", verifyToken, TasteController.saveTaste);

router.get("/gustos", verifyToken, TasteController.getTastes);

router.get("/gustosByUser/:user", verifyToken, TasteController.getTastesAdr);

router.get("/gusto/:id", verifyToken, TasteController.getTaste);

router.delete("/delete-gusto/:id", verifyToken, TasteController.deleteTaste);

router.put("/update-gusto/:id", verifyToken, TasteController.updateTaste);

module.exports = router;