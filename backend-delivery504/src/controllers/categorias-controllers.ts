import { Request, Response } from "express";
import { categoriasSchema } from "../model/categorias-schema";


// Obtener los Admin
export const obtenerCategorias = (req: Request, res: Response) => {
	categoriasSchema.find()
		.then((result) => {
			res.send(result);
			res.end();
		})
		.catch((error) => console.error(error));
};