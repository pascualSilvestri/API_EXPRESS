import express from 'express'
import routerMusica from './routers/musica.routers.js';
import routerArtista from './routers/artistas.routers.js';
import cors from 'cors'


const app = express()

app.use(cors({
    origin: '*'
  }));

app.use(express.json())

app.use('/api',routerMusica)
app.use('/api',routerArtista)

app.use((req,res)=>{
    res.status(404).json({
        messaje:'No existe la ruta'
    })
})

export default app