import pkg from "pg"
const { Pool } = pkg

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
})

export default async function handler(req, res) {
  try {
    if(req.method === "GET") {
      const result = await pool.query(
        "SELECT id, nombre FROM fruits ORDER BY id"
      )
      return res.status(200).json(result.rows)
    }

    if(req.method === "POST") {
      const { nombre } = req.body

      if(!nombre || nombre.trim() === "") {
        return res.status(400).json({ error: "Nombre inválido" })
      }

      const result = await pool.query(
        "INSERT INTO fruits (nombre) VALUES ($1) RETURNING id, nombre",
        [nombre]
      )
      return res.status(201).json(result.rows[0])
    }

    if(req.method === "DELETE") {
      const { id } = req.query

      await pool.query(
        "DELETE FROM fruits WHERE id = $1",
        [id]
      )
      return res.status(204).end()
    }
    res.status(405).end()
  } catch (error) {
    console.error("DB ERROR:", error)
    res.status(500).json({ error: "Error en la base de datos" })
  }
}
