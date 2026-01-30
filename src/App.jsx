function App(){
  const nombre = "Sunny"
  return(
    <>
      <h1>Hola, mi nombre es {nombre}</h1>
      <Saludo />
    </>
     )
}

function Saludo(){
  return (
    <p>Este es un componente.</p>
  )
}

export default App
