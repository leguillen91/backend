import mongoose from "mongoose";


export interface cliente  extends registro,card,ubicacion,ordenes {
//id:    number;

}


export interface registro  {

    nombre:         string,
    apellido:       string
    correo:         string; 
    password:       string; 
    
    }

    export interface card  {

        nombreTarjeta:  string,
        numeroTarjeta:  number
        expira:         string; 
        cvv:            number; 
        
        }

        export interface ubicacion  {

            longitud:  string,
            latitud:  string    
            }


            export interface ordenes{

            nombreProducto:         string,
            descripcion:            string,
            cantidad:               number,
            precio:                 number
            }