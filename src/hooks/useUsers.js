import { useEffect, useState } from "react"

function useUsers(){
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
    .then(data => {
        setUsers(data)
        setLoading(false)
      })
    .catch(err => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  return {
    users,
    loading,
    error
  }

}

export default useUsers
