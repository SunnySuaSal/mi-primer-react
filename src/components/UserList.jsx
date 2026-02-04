import { useEffect, useState } from "react"

function UserList(){
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => {
        if(!res.ok){
          throw new Error("Error al cargar usuarios")
        }
        return res.json()
      })
    .then(
        data => {
          setUsers(data)
          setLoading(false)
      })
  }, [])

  if(loading){
    return <p>Cargando usuarios...</p>
  }

  if(error){
    return <p>Error: {error}</p>
  }

  return(
  <>
  <h2>Aquí estamos usando una API REST !!</h2>

  <ul>
    {users.map(user => (
      <li key={user.id}>
        {user.name} - {user.email}
      </li>
    ))}
  </ul>

  </>

  )
}

export default UserList
