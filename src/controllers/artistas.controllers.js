import { pool } from '../db.js'

export const getArtistas = async (req, res) => {
    try {
        const result = await pool.query('select * from artista;')
        res.json(result[0])
    } catch (error) {
        return res.status(500).json({
            messaje:'Mensaje de error'
        })
    }
}

export const getArtistasById = async (req, res) => {
    try {
        const id = req.params.id
        const [rows] = await pool.query(`select * from artista where id = ? ;`, [id])
        if (rows.length <= 0) return res.status(404).json({ messaje: "Artista no encontrado" })


        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            messaje:'Mensaje de error'
        })
    }
}


export const createArtista = async (req, res) => {
    try {
        let { nombre, edad } = req.body
        const [row] = await pool.query("INSERT INTO artista (nombre, edad) VALUES (?,?);", [nombre, edad])
        console.log(row)
        res.send(req.body)
    } catch (error) {
        return res.status(500).json({
            messaje:'Mensaje de error'
        })
    }
}

export const modificarArtista = async (req, res) => {
    try {
        const id = req.params.id
        const { nombre, edad } = req.body
        console.log(`${id},${nombre},${edad}`)

        const [result] = await pool.query(`UPDATE artista SET nombre = IFNULL(?,nombre), edad = IFNULL(?,edad) WHERE id = ?;`, [nombre, edad, id])

        if (result.affectedRows <= 0) return res.status(404).json({ messaje: "Musica no encontrado" })

        const [rows] = await pool.query(`select * from artista where id = ? ;`, [id])

        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            messaje:'Mensaje de error'
        })
    }
}

export const eliminarArtista = async (req, res) => {
    try {
        const id = req.params.id
        const [rows] = await pool.query(`DELETE from artista where id = ? ;`, [id])
        if (rows.length <= 0) return res.status(404).json({ messaje: "Artista no encontrado" })

        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            messaje:'Mensaje de error'
        })
    }
}