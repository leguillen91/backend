import mongoose  from "mongoose";
import { Admin } from "./admin-model";

const schema = new mongoose.Schema<Admin>({

id:             Number,
correo:         String,
password:       String, 
direccion:      String,
edad:           Number,

});

export const AdminSchema = mongoose.model('administradores',schema);