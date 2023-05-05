import { Request, Response } from "express";
import { ClienteSchema } from "../model/clientes-schema";


// Obtener los clientes
export const obtenerClientes = (req: Request, res: Response) => {
	ClienteSchema.find().limit(150)
		.then((result) => {
			res.send(result);
			res.end();
		})
		.catch((error) => console.error(error));
};


//Obtener solo uno
export const obtenerCliente = (req: Request, res: Response) => {
	ClienteSchema.find({ _id: req.params.id })
		.then((result) => {
			res.send(result);
			res.end();
		})
		.catch((error) => console.error(error));
};

//Agregar Clientes
export const agregarClientes = (req: Request, res: Response) => {
	const c = new ClienteSchema({
		//id: req.body.id,

        nombre:                req.body.nombre,
        apellido:              req.body.apellido,
        correo:                req.body.correo,
        password:              req.body.password,

        nombreTarjeta:         req.body.nombreTarjeta,
        numeroTarjeta:         req.body.numeroTarjeta,
        expira:                req.body.expira,
        cvv:                   req.body.cvv,

        longitud:              req.body.longitud,
        latitud:               req.body.latitud ,

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