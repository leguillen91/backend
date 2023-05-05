import express from "express";
import { obtenerClientes ,obtenerCliente, agregarClientes} from "../controllers/clientes-controllers";

const router = express.Router();

router.get("/", obtenerClientes);
router.get("/:id", obtenerCliente);
router.post("/", agregarClientes);
//router.put("/:id", updatePokemon);
//router.delete("/:id", deletePokemon);



export default router;