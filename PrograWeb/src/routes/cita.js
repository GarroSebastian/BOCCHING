import Express from "express";
import CitaController from "../controller/CitaController.js";

const {findAll, findOne, create, update, remove} = CitaController

const router = Express.Router()

router.get("/", findAll)
router.get("/:id", findOne)
router.post("/", create)
router.put("/", update)
router.delete("/:id", remove)

export default router