const express = require("express");
const router = express.Router();

const RequestController = require("../controllers/request.controller");
const verifyToken = require("../middlewares/verifyToken");

//rutas
router.post("/save-solicitud/:id", verifyToken, RequestController.saveRequest);

router.delete("/delete-solicitud/:id", verifyToken, RequestController.deleteRequest);

router.get("/getAllSolicitudes", verifyToken, RequestController.getAllRequests);

router.get("/getSolicitud/:id", verifyToken, RequestController.getOneRequest);
router.get("/get-all-received-requests", verifyToken, RequestController.getAllReceivedRequests);
router.put('/actualizar-viewer-solicitudes', verifyToken, RequestController.actualizarViewerSolicitudes);

module.exports = router;