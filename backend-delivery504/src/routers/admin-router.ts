import express from "express";
import { obtenerAdmin } from "../controllers/admin-controllers";

const router = express.Router();

router.get("/", obtenerAdmin);

//router.get("/:id", getPokemon);
//router.post("/", addPokemon);
//router.put("/:id", updatePokemon);
//router.delete("/:id", deletePokemon);

export default router;
