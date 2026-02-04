import { useState } from "react"

import Counter from "./components/Counter"

function App(){

  const nombre = "Sunny"

  const frutas = ["Manzana", "Plátano", "Naranja"] //Estas listas normalmente vienen de una API

  const frutasDin = [ //Si la lista va a ser dinamica, React te pide un key para identificar los elementos
    {id: 1, nombre: "Durazno"},
    {id: 2, nombre: "Sandía"},
    {id: 3, nombre: "Melón"}
  ]

  return(
    <>
      <h1>Hola, mi nombre es {nombre}</h1>
      <Saludo />
      <Ejemplo nombre="UsuarioJeje" />

      <Counter />

    <ul>
  {frutas.map(fruta => (
    <li key={fruta}>{fruta}</li>
  ))}
</ul> 

      <ul>
  {frutasDin.map(fruta => (
    <li key={fruta.id}>{fruta.nombre}</li>
  ))}
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
