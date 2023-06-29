import { pool } from '../db.js'


export const getMusica = async (req, res) => {
    try {

        const result = await pool.query('select * from musica')
        res.json(result[0])
    } catch (error) {
        return res.status(500).json({
            messaje:'Mensaje de error'
        })
    }

}

export const getMusicaById = async (req, res) => {
    try {
        const id = req.params.id
        const [rows] = await pool.query(`select * from musica where id = ? ;`, [id])
        if (rows.length <= 0) return res.status(404).json({ messaje: "Musica no encontrado" })


        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            messaje:'Mensaje de error'
        })
    }
}

export const crearMusica = async (req, res) => {
    try {
        let { titulo, tiempo, artista_id } = req.body
        const [row] = await pool.query("INSERT INTO musica (titulo,tiempo,artista_id) VALUES (?,?,?);", [titulo, tiempo, artista_id])
        console.log(row)
        res.send(req.body)
    } catch (error) {
        return res.status(500).json({
            messaje:'Mensaje de error'
        })
    }
}

export const modificarMusica = async (req, res) => {
    try {
        const id = req.params.id
        const { titulo, tiempo, artista_id } = req.body
        console.log(`${id},${titulo},${tiempo},${artista_id}`)

        const [resuls] = await pool.query(`UPDATE musica
    SET titulo = IFNULL(?,titulo), tiempo = IFNULL(?,tiempo), artista_id = IFNULL(?,artista_id)
    WHERE id = ?;`, [titulo, tiempo, artista_id, id])

        if (resuls.affectedRows <= 0) return res.status(404).json({ messaje: "Musica no encontrado" })

        const [rows] = await pool.query(`select * from musica where id = ? ;`, [id])

        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            messaje:'Mensaje de error'
        })
    }
}


export const eliminarMusica = async (req, res) => {
    try {
        const id = req.params.id
        const result = await pool.query(`DELETE from musica where id = ? ;`, [id])
        console.log(result)
        if (result[0].affectedRows <= 0) return res.status(404).json({ messaje: "Muscia no encontrado" })

        res.json({
            messaje: `id ${id} borrado`
        })
    } catch (error) {
        return res.status(500).json({
            messaje:'Mensaje de error'
        })
    }
}