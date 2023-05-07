import mongoose  from "mongoose";
import { motorista } from "./motoristas-model";

const schema = new mongoose.Schema<motorista>({

nombre:         String,
apellido:       String,
correo:         String,
password:       String, 
celular:        Number,

nombreCliente:          String,
nombreProducto:         String,
descripcion:            String,
cantidad:               Number,
precio:                 Number

});

export const motoristaSchema = mongoose.model('motoristas',schema);