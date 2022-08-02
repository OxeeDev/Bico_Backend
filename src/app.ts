// * Importanto o express
import express from 'express';
import { router } from './routes';
import cors from 'cors';
import path from "path";

// * Criando o APP
const app = express();

app.use(express.urlencoded({ extended: true }))
app.use(express.json()); // Deixando o Express compativel com JSON
app.use(cors())
app.use('/files', express.static(path.resolve(__dirname, "..", "tmp", "uploads")))
app.use(router) // Colocando as rotas no express

// ! Exportando o app para o server.ts
export { app };
