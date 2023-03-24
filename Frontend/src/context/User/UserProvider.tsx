import { useState } from "react"
import { UserType } from "../../types/UserType"
import { UserContext } from "./UserContext"

export const UserProvider = ({ children }: { children: JSX.Element }) => {
   const [userData, setUserData] = useState<UserType>({id: '', userName: '', userLogin: '', userPassword: '', userAdmin: false })

   return(
      <UserContext.Provider value={{ userData, setUserData }}>
         { children }
      </UserContext.Provider>
   )
}