import pkg from "pg"
const { Pool } = pkg

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
})

export default async function handler(req, res) {
  if(req.method === "GET") {
    try {
      const result = await pool.query(
        "SELECT id, nombre FROM fruits ORDER BY id"
      )
      res.status(200).json(result.rows)
    } catch (error) {
      console.error("DB ERROR:", error)
      res.status(500).json({ 
        error: error.message,
        detail: error
      })
    }
  } else {
    res.status(405).end()
  }
}
