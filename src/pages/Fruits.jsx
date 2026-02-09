import { useEffect, useState } from "react"
import FruitList from "../components/FruitList"
import "./Fruits.css"

function Fruits(){

  const [nuevaFruta, setNuevaFruta] = useState("")
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

  const agregarFruta = async () => {
    if(nuevaFruta.trim() === "") return

    try {
      const res = await fetch("/api/fruits", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ nombre:nuevaFruta })
      })

      if(!res.ok){
        throw new Error("Error al agregar fruta")
      }

      const frutaCreada = await res.json()
      setFrutas([...frutas, frutaCreada])
      setNuevaFruta("")
    } catch (err) {
      alert(err.message)
    }
  }

  const eliminarFruta = async (id) => {
    try {
      const res = await fetch(`/api/fruits?id=${id}`, {
        method: "DELETE"
      })
      if(!res.ok){
        throw new Error("Error al eliminar fruta")
      }

      setFrutas(frutas.filter(fruta => fruta.id !== id))
    } catch (err){
      alert(err.message)
    }
  }


  if(loading) return <p>Cargando frutas...</p>
  if(error) return <p>Error: {error}</p>

  return (
    <div className="fruits-page">
      <h1>Frutas desde la base de datos</h1>

      <input
        type="text"
        value={nuevaFruta}
        onChange={(evento) => setNuevaFruta(evento.target.value)}
        placeholder="Nueva fruta"
      />

      <button onClick={agregarFruta}>
        Agregar fruta
      </button>

      <FruitList
        items={frutas}
        getKey={(fruta) => fruta.id}
        renderItem={(fruta) => (
          <>
            <span>{fruta.nombre}</span>
            <button onClick={() => eliminarFruta(fruta.id)}>
              Eliminar
            </button>
          </>
        )}
      />
    </div>
  )

}

export default Fruits
