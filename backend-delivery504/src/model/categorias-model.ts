import mongoose from "mongoose";


export interface categorias  {


    nombreCategoria: string,
    imagen:          string,
    empresas:        Array<string>;

}