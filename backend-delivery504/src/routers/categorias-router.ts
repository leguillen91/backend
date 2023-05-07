import express from "express";
import { obtenerCategorias } from "../controllers/categorias-controllers";

const router = express.Router();

router.get("/", obtenerCategorias);
//router.get("/:id", obtenerCategorias);


//router.post("/", addPokemon);
//router.put("/:id", updatePokemon);
//router.delete("/:id", deletePokemon);

export default router;