const express = require("express");
const router = express.Router();

const UserController = require("../controllers/user.controller");
const verifyToken = require("../middlewares/verifyToken");

//rutas
router.post("/register", UserController.save_User);

router.post("/login", UserController.login_User);

router.get("/usuario", verifyToken, UserController.get_user);

router.delete("/delete-user", verifyToken, UserController.delete_user);

router.put("/update-user", verifyToken, UserController.update_user);

module.exports = router;