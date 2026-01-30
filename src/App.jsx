function App(){
  const nombre = "Sunny"
  return(
    <>
      <h1>Hola, mi nombre es {nombre}</h1>
      <Saludo />
      <Ejemplo nombre="UsuarioJeje" />
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
