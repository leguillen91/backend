import mongoose  from "mongoose";
import { categorias } from "./categorias-model";

const schema = new mongoose.Schema<categorias>({

    nombreCategoria: String,
    imagen:          String,
    empresas:        Array<String>

});

export const categoriasSchema = mongoose.model('categorias',schema);