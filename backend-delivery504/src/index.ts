import express from "express";
import { Database } from "./utils/database";
import cors from 'cors';

const database:Database = new Database(); //Se conecta a mongo
const app = express();
const port = 8888;


app.use(cors());
app.use(express.json()); 
app.use(express.urlencoded({extended:true})); 


app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
	console.log(`Servidor Levantado en https://localhost:${port}`);
});

