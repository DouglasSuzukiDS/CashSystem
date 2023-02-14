import { useContext } from "react"
import Error from "../../pages/Error/Error"
import Login from "../../pages/Login/Login"
import { AuthContext } from "./AuthContext"

export const RequireAuth = ({ children }: {children: JSX.Element}) => {
   const auth = useContext(AuthContext)

   if(!auth.user) {
      return <Login />
   }

   return children
}