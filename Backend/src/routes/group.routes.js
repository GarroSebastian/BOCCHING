const express = require("express");
const router = express.Router();

const GroupController = require("../controllers/group.controller");
const verifyToken = require("../middlewares/verifyToken");

router.post("/save-grupo", verifyToken, GroupController.saveGroup);

router.get("/grupo", verifyToken, GroupController.getGroup);

router.delete("/delete-grupo", verifyToken, GroupController.deleteGroup);

module.exports = router;