const express = require("express");
const router = express.Router();

const RequestController = require("../controllers/request.controller");
const verifyToken = require("../middlewares/verifyToken");

//rutas
router.post("/save-solicitud/:id", verifyToken, RequestController.saveRequest);

router.delete("/delete-solicitud/:receptorid", verifyToken, RequestController.deleteRequest);

router.delete("/delete-solicitud-id/:id", verifyToken, RequestController.deleteRequestAdr);

router.get("/getAllSolicitudes", verifyToken, RequestController.getAllRequests);

router.get("/getSolicitudesFromUser", verifyToken, RequestController.getAllRequestsAdr);

router.get("/getAllSolicitudesEmitidas", verifyToken, RequestController.getAllRequestsEmitidas);

router.get("/getAllSolicitudesRecibidas", verifyToken, RequestController.getAllRequestsRecibidas);

router.get("/getSolicitud/:id", verifyToken, RequestController.getOneRequest);
router.get("/get-all-received-requests", verifyToken, RequestController.getAllReceivedRequests);

router.put('/update-solicitud', verifyToken, RequestController.actualizarSolicitud);

router.put('/actualizar-viewer-solicitudes', verifyToken, RequestController.actualizarViewerSolicitudes);

module.exports = router;