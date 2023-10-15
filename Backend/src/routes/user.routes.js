const express = require("express");
const router = express.Router();

const UserController = require("../controllers/user.controller");
const verifyToken = require("../controllers/verifyToken");
const multer = require("../libs/multer");

//rutas
router.post("/register", UserController.save_User);

router.post("/login", UserController.login_User);

router.get("/usuario", verifyToken, UserController.get_user);

router.put("/update_usuario", verifyToken, multer.single("avatar"), UserController.update_user);

module.exports = router;