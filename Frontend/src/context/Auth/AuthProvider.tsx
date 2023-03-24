import { useContext, useEffect, useState } from "react"
import { useApi } from "../../hooks/UserApi"
import { UserType } from "../../types/UserType"
import { UserContext } from "../User/UserContext"
import { AuthContext } from "./AuthContext"

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
   const [user] = useState<UserType | null>(null)
   const { userData, setUserData } = useContext(UserContext)

   const api = useApi()

   useEffect(() => {
      const validateToken = async() => {
         const storageData = localStorage.getItem('authToken')

         if(storageData) {
            // const data = await api.validateToken(storageData)

            // if(data.user) {
            //    setUser(data.user)
            // }
            await api.validateToken(storageData)
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
         
      const response = await api.loginSystem(userLogin, userPassword)
      console.log(response)
      // let test = JSON.parse(response.user)
      // console.log(typeof response.user)

      if(response) {
         deleteToken()
         createToken(response.token)

         if(response.user) {
            console.log('User =>' + response.user)
            // setUser(JSON.parse(response.user))
            // console.log(user)
            console.log('O tipo de res.user no AuthProvider é: ' + typeof JSON.parse(response.user))
            setUserData(JSON.parse(response.user))
         }
         return true
      } else {
         alert('Dados incorretos ou inexistentes')
         return false
      }
   }

   const logout = async() => {
      //setUser(null)
      deleteToken()
      // console.log('Reset', user)
      await api.logout()
   }

   const createToken = (token: string) => {
      localStorage.setItem('AuthToken', token)
   }

   const deleteToken = () => {
      localStorage.removeItem('AuthToken')
   }

   return(
      // <AuthContext.Provider value={{ user, setUser, loginSystem, logout }}>
      <AuthContext.Provider value={{ user, loginSystem, logout }}>
         { children }
      </AuthContext.Provider>
   )
}
