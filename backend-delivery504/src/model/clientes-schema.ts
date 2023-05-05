import mongoose  from "mongoose";
import { cliente  } from "./clientes-model";

const schema = new mongoose.Schema<cliente>({

//id:             Number,
nombre:                 String,
apellido:               String,
correo:                 String,
password:               String,

nombreTarjeta:          String,
numeroTarjeta:          Number,
expira:                 String,
cvv:                    Number,

longitud:               String,
latitud:                String ,

nombreProducto:         String,
descripcion:            String,
cantidad:               Number,
precio:                 Number

});

export const ClienteSchema = mongoose.model('clientes',schema);