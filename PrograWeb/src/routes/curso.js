import Express from "express";
import CursoController from "../controller/CursoController.js";

const {findAll, findOne, create, update, remove} = CursoController

const router = Express.Router()

router.get("/", findAll)
router.get("/:id", findOne)
router.post("/", create)
router.put("/", update)
router.delete("/:id", remove)

export default router