import { Request, Response } from "express";
import { AdminSchema } from "../model/admin-schema";


// Obtener los Admin
export const obtenerAdmin = (req: Request, res: Response) => {
	AdminSchema.find().limit(150)
		.then((result) => {
			res.send(result);
			res.end();
		})
		.catch((error) => console.error(error));
};

