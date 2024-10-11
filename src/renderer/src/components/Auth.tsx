import { useAuthContext } from "../hooks/useAuthContext"
import { Login } from "../pages/login/Login"

export const Auth = ({ children }: { children: JSX.Element }) => {
  const { loggedIn } = useAuthContext()
  return loggedIn ? children : <Login />
}
