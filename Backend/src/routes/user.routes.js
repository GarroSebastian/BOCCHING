const express = require("express");
const router = express.Router();

const UserController = require("../controllers/user.controller");
const verifyToken = require("../middlewares/verifyToken");

//rutas
router.post("/register", UserController.save_User);

router.post("/login", UserController.login_User);

router.get("/usuario/:id", UserController.get_one_user);

router.get("/get-all-users", UserController.get_all_users);

router.delete("/delete-user", verifyToken, UserController.delete_user);

router.put("/update-user", verifyToken, UserController.update_user);

router.get("/verify-delete-code/:confirmationCode", verifyToken, UserController.verify_delete_code);module.exports = router;


module.exports = router;