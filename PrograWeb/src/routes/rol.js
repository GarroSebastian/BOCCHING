import Express from "express";
import RolController from "../controller/RolController.js";

const {findAll , findOne, create, update, remove} = RolController

const router = Express.Router()

router.get("/", findAll)
router.get("/:id", findOne)
router.post("/", create)
router.put("/", update)
router.delete("/:id", remove)

export default router