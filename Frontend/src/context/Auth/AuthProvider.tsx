import { useEffect, useState } from "react"
import { useApi } from "../../hooks/UserApi"
import { UserType } from "../../types/UserType"
import { AuthContext } from "./AuthContext"

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
   const [user] = useState<UserType | null>(null)
   const [userData, setUserData] = useState<UserType>({ id: '', userName: '', userLogin: '', userPassword: '', userAdmin: false })
   
   const api = useApi()

   useEffect(() => {
      const validateToken = async () => {
         const storageData = localStorage.getItem('authToken')

         if (storageData) {
            await api.validateToken(storageData)
         }
      }
      validateToken()
   }, [api])

   const signIn = async (userLogin: string, userPassword: string) => {
      const response = await api.signIn(userLogin, userPassword)
      if (response.status === 200) {
         let data = JSON.parse(response.data.result)
         console.log(data)
         setUserData(data)

         //console.log((response.data.result.userName))
         deleteToken()
         createToken(response.data.token)
         createUserDataToken(response.data.userInfos[0], response.data.userInfos[1])

         return true
      } else {
         return false
      }
   }

   const logout = async () => {
      //setUser(null)
      deleteToken()
      // console.log('Reset', user)
      await api.logout()
   }

   const createToken = (token: string) => {
      localStorage.setItem('AuthToken', token)
   }

   const createUserDataToken = (name: string, admin: boolean) => {
      let userDatas = { userName: name, userAdmin: admin }
      localStorage.setItem('UserDatas', JSON.stringify(userDatas))
   }

   const deleteToken = () => {
      // localStorage.removeItem('AuthToken')
      localStorage.clear()
   }

   return (
      <AuthContext.Provider value={{ user, signIn, logout, userData, setUserData }}>
         {children}
      </AuthContext.Provider>
   )
}