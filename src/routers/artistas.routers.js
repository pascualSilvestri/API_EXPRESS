import { Router } from "express";
import {getArtistas, createArtista, modificarArtista, eliminarArtista,getArtistasById} from "../controllers/artistas.controllers.js";

const router = Router();


router.get('/artista',getArtistas)

router.get('/artista/:id',getArtistasById)

router.post('/artista',createArtista)

router.patch('/artista/:id',modificarArtista)

router.delete('/artista/:id',eliminarArtista)


export default router