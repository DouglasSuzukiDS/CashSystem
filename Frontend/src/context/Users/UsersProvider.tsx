import { useEffect, useState } from "react"
import { UsersContext } from "./UsersContext"
import { UserType } from "../../types/UserType"
import { allUsers } from "../../services/user.service"

export const UsersProvider = ({ children }: { children: JSX.Element } ) => {
   const [users, setUsers] = useState<UserType[]>([])

   useEffect(() => {
      allUsers()
         .then(setUsers)
   }, [])

   return(
      <UsersContext.Provider value={ { users, setUsers } }>
         { children }
      </UsersContext.Provider>
   )
}