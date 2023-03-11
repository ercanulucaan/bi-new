import { useState, useEffect } from "react"
import { AuthContext } from "../contexts/AuthContext"
import api from "../api"

function AuthProvider({ children }) {

  const token = localStorage.getItem('token')
  const [loggedIn, setLoggedIn] = useState(false)
  const [selfData, setSelfData] = useState(false)

  const getSelfData = () => {
    api.getSelfClient(token).then((response) => {
      setSelfData(response.result)
    }).catch((error) => {
      return error
    })
  }

  useEffect(() => {
    if (token) {
      setLoggedIn(true)
      getSelfData()
      console.log(selfData)
    }
  }, [loggedIn])

  return (
    <AuthContext.Provider value={{ token, loggedIn, setLoggedIn, selfData, setSelfData }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
