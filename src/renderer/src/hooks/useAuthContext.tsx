import React from "react"
import { LoggedInContext } from "../helpers/AuthContextProvider"

export function useAuthContext() {
  const [loggedIn, setLoggedIn] = React.useContext(LoggedInContext)
  const login = () => {
    setLoggedIn(true)
  }
  const logout = () => {
    setLoggedIn(false)
  }
  return { loggedIn, setLoggedIn, login, logout }
}
