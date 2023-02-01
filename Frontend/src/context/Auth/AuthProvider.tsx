import { useEffect, useState } from "react"
import { useApi } from "../../hooks/UserApi"
import { UserType } from "../../types/UserType"
import { AuthContext } from "./AuthContext"

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
   const [user, setUser] = useState<UserType | null>(null)

   const api = useApi()

   useEffect(() => {
      const validateToken = async() => {
         const storageData = localStorage.getItem('authToken')

         if(storageData) {
            const data = await api.validateToken(storageData)

            if(data.user) {
               setUser(data.user)
            }
         }
      }
      validateToken()
   }, [api])

   const loginSystem = async(userLogin: string, userPassword: string) => {
      // const data = await api.loginSystem(userLogin, userPassword) // Aqui me retorna o nome e o token
      //    if(data.user && data.token) {
      //       setUser(data.user)
      //       createToken(data.token)
      //       return true
      //    }

      // return false 


      await api.loginSystem(userLogin, userPassword) // Aqui me retorna o nome e o token
         .then(response => {
            if(response.msg && response) {
               // setUser(response.data.user)
               console.log(response.msg)
               console.log(response.token)
               createToken(response.token)
               return true
            } 
         }) 
         .catch(err => console.log(err))
         return false
   }

   const logout = async() => {
      await api.logout()
      setUser(null)
      deleteToken()
   }

   const createToken = (token: string) => {
      localStorage.setItem('AuthToken', token)
   }

   const deleteToken = () => {
      localStorage.removeItem('AuthToken')
   }

   return(
      <AuthContext.Provider value={{ user, loginSystem, logout }}>
         { children }
      </AuthContext.Provider>
   )
}
