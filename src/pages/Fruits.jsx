import { useEffect, useState } from "react"
import FruitList from "../components/FruitList"
import "./Fruits.css"

function Fruits(){

  const [frutas, setFrutas] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch("/api/fruits")
    .then(res => {
        if(!res.ok) {
          throw new Error("Error al cargar frutas")
        }
        return res.json()
      })
    .then(data => {
        setFrutas(data)
        setLoading(false)
      })
    .catch(err => {
        setError(err.message)
        setLoading(false)
      })
  }, []) //solo una vez (on mount)

  if(loading) return <p>Cargando frutas...</p>
  if(error) return <p>Error: {error}</p>

  return (
    <div className="fruits-page">
      <h1>Frutas desde la base de datos</h1>

      <FruitList
        items={frutas}
        getKey={(fruta) => fruta.id}
        renderItem={(fruta) => (
        <span>{fruta.nombre}</span>
        )}
      />
    </div>
  )

}

export default Fruits
