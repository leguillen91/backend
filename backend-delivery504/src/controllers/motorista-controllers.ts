import { Request, Response } from "express";
import { motoristaSchema } from "../model/motoristas-schema";


// Obtener los motoristas
export const obtenerMotoristas = (req: Request, res: Response) => {
	motoristaSchema.find()
		.then((result) => {
			res.send(result);
			res.end();
		})
		.catch((error) => console.error(error));
};



//Obtener solo uno
export const obtenerMotorista = (req: Request, res: Response) => {
	motoristaSchema.find({ _id: req.params.id })
		.then((result) => {
			res.send(result);
			res.end();
		})
		.catch((error) => console.error(error));
};


//Agregar Motorista
export const agregarMotorista = (req: Request, res: Response) => {
	const c = new motoristaSchema({
		//id: req.body.id,

        nombre:                req.body.nombre,
        apellido:              req.body.apellido,
        correo:                req.body.correo,
        password:              req.body.password,


		nombreCliente:         req.body.nombreCliente,
        nombreProducto:        req.body.nombreProducto,
        descripcion:           req.body.descripcion,
        cantidad:              req.body.cantidad,
        precio:                req.body.precio

        
	
	});
  c.save().then(saveResponse => {
    res.send(saveResponse);
    res.end();
  }).catch(error=>{
    res.send({message: 'Hubo un error al guardar', error}); // shorthand
    res.end();
  });
 
};