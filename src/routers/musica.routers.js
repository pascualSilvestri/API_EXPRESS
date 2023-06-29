import { Router } from "express";
import { getMusica,modificarMusica,crearMusica,eliminarMusica,getMusicaById } from "../controllers/muscia.controllers.js";


const router = Router();

router.get('/musica',getMusica )

router.get('/musica/:id',getMusicaById )

router.post('/musica',crearMusica)

router.patch('/musica/:id',modificarMusica)

router.delete('/musica/:id',eliminarMusica)


export default router