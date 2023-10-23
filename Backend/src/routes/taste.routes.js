const express = require("express");
const router = express.Router();

const TasteController = require("../controllers/taste.controller");
const verifyToken = require("../middlewares/verifyToken");

//rutas
router.post("/save-gusto", verifyToken, TasteController.saveTaste);

router.get("/gusto", verifyToken, TasteController.getTaste);

router.delete("/delete-gusto", verifyToken, TasteController.deleteTaste);

router.put("/update-gusto", verifyToken, TasteController.updateTaste);

module.exports = router;