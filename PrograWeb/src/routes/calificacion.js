import Express from "express";
import CalificacionController from "../controller/CalificacionController.js";

const {findAll, findOne, create, update, remove} = CalificacionController

const router = Express.Router()

router.get("/", findAll)
router.get("/:id", findOne)
router.post("/", create)
router.put("/", update)
router.delete("/:id", remove)

export default router