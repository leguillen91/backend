import mongoose from "mongoose";


export interface motorista extends ordenes  {
nombre:         string;
apellido:       string;
celular:        number;
correo:         string; 
password:       string; 


}

export interface ordenes{

    nombreCliente:          string,
    nombreProducto:         string,
    descripcion:            string,
    cantidad:               number,
    precio:                 number
    }


    