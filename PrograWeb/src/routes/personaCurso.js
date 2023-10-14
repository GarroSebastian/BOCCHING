import Express from "express";
import PersonaCursoController from "../controller/PersonaCursoController.js";

const {findAll, findOne, create, update, remove} = PersonaCursoController

const router = Express.Router()

router.get("/", findAll)
router.get("/:id", findOne)
router.post("/", create)
router.put("/", update)
router.delete("/:id", remove)

export default router