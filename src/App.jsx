import { useState } from "react"

function App(){

  const [contador, setContador] = useState(0)

  const nombre = "Sunny"

  const frutas = ["Manzana", "Plátano", "Naranja"] //Estas listas normalmente vienen de una API

  return(
    <>
      <h1>Hola, mi nombre es {nombre}</h1>
      <Saludo />
      <Ejemplo nombre="UsuarioJeje" />

      <p>Contador: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>
        Incrementar
      </button>

      <ul>
        {
          frutas.map(fruta => (
            <li>{fruta}</li>
            )
          )
        }
      </ul>

    </>
     )
}

function Saludo(){
  return (
    <p>Este es un componente</p>
  )
}

function Ejemplo(props){
  return (
    <h2>Usando props, se que tu nombre de usuario es {props.nombre}</h2>
  )
}

export default App
