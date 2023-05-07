import express from "express";
import { obtenerMotoristas, obtenerMotorista, agregarMotorista  } from "../controllers/motorista-controllers";

const router = express.Router();

router.get("/", obtenerMotoristas);
router.get("/:id", obtenerMotorista);
router.post("/", agregarMotorista);

export default router;