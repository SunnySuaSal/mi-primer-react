import { useState } from "react"

import Counter from "./components/Counter"
import { Saludo, Ejemplo } from "./components/SimpleComponents"
import FruitList from "./components/FruitList"

function App(){

  const nombre = "Sunny"

  const [frutas, setFrutas] = useState([
    "Manzana",
    "Platano",
    "Naranja"
  ])

  const [nuevaFruta, setNuevaFruta] = useState("")
  const [nuevaFrutaDin, setNuevaFrutaDin] = useState("")

  const agregarFruta = () => {
    if(nuevaFruta.trim() === "") return
    setFrutas([...frutas, nuevaFruta])
    setNuevaFruta("")
  }

  const eliminarFruta = (frutaAEliminar) => {
    setFrutas(frutas.filter(fruta => fruta !== frutaAEliminar))
  }

  const [frutasDin, setFrutasDin] = useState([ //Si la lista va a ser dinamica, React te pide un key para identificar los elementos
    {id: 1, nombre: "Durazno"},
    {id: 2, nombre: "Sandía"},
    {id: 3, nombre: "Melón"}
  ])

  const [nextId, setNextId]  = useState(4) //Se hace mejor con uuid o APIs, pero lo vemos despues

  const agregarFrutaDin = () => {
    if(nuevaFrutaDin.trim() === "") return //Esto es para que no se agreguen espacios o inputs vacios

    setFrutasDin([
      ...frutasDin,
      {id: nextId, nombre: nuevaFrutaDin}
    ])

    setNextId(nextId + 1)
    setNuevaFrutaDin("") //Esto reinicia el estado para dejarlo listo pal siguiente
  }

  const eliminarFrutaDin = (id) => {
    setFrutasDin(frutasDin.filter(fruta => fruta.id !== id))
  }

  return(
    <>
      <h1>Hola, mi nombre es {nombre}</h1>
      <Saludo />
      <Ejemplo nombre="UsuarioJeje" />

      <Counter />

      <p>La siguiente lista no debería ser dinámica, por atrás no tiene id, pero
      funciona como experimento.</p>

      <input 
        type="text" 
        value={nuevaFruta}
        onChange={(evento) => setNuevaFruta(evento.target.value)}
        placeholder="Nueva fruta"
      />
      <button
        onClick={() => {
          if(nuevaFruta.trim() === "") return
          setFrutas([...frutas, nuevaFruta])
          setNuevaFruta("")
        }}
      >
        Agregar fruta
      </button>

      <FruitList
        items={frutas}
        getKey={(fruta) => fruta}
        renderItem={(fruta) => (
          <>
            {fruta}
            <button onClick={() => eliminarFruta(fruta)}>
              Eliminar esta fruta
            </button>
          </>
        )}
      />

      <input //input solo controla texto, en este caso el nombre de la nueva fruta
        type="text" 
        value={nuevaFrutaDin}
        onChange={(evento) => setNuevaFrutaDin(evento.target.value)} //esto recibe una string siempre
        placeholder="Nueva fruta Din"
      />
      <button
        onClick={agregarFrutaDin}
      >
        Agregar fruta Din
      </button>


      <FruitList
        items={frutasDin}
        getKey={(fruta) => fruta.id}
        renderItem={(fruta) => (
          <>
            {fruta.nombre}
            <button onClick={() => eliminarFrutaDin(fruta.id)}>
              Eliminar esta fruta.
            </button>
          </>
        )}
      />

    </>
  )
}


export default App
