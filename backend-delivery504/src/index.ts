import express from "express";
import { Database } from "./utils/database";
import clientesRouter from "./routers/clientes-router";
import adminRouter from "./routers/admin-router";
import motoristasRouter from "./routers/motoristas-router";
import categoriasRouter from "./routers/categorias-router";
import motoristaRouter from "./routers/motoristas-router"; 


import cors from 'cors';

const database:Database = new Database(); //Se conecta a mongo
const app = express();
const port = 8888;


app.use(cors());
app.use(express.json()); 
app.use(express.urlencoded({extended:true})); 


app.get('/', (req, res) => {
  res.send('Probando backend');
});


app.use('/clientes', clientesRouter);
app.use('/admin', adminRouter);
app.use('/motoristas', motoristasRouter);
app.use('/categorias', categoriasRouter);


app.listen(port, () => {
	console.log(`Servidor Levantado en https://localhost:${port}`);
});
