import { useContext, useEffect, useState } from "react"
import { useApi } from "../../hooks/UserApi"
import { UserType } from "../../types/UserType"
import { UserContext } from "../User/UserContext"
import { AuthContext } from "./AuthContext"
import axios from "axios"

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
   const [user] = useState<UserType | null>(null)
   const [userData, setUserData] = useState<UserType>({ id: '', userName: '', userLogin: '', userPassword: '', userAdmin: false })
   
   const api = useApi()

   useEffect(() => {
      const validateToken = async () => {
         const storageData = localStorage.getItem('authToken')

         if (storageData) {
            // const data = await api.validateToken(storageData)

            // if(data.user) {
            //    setUser(data.user)
            // }
            await api.validateToken(storageData)
         }
      }
      validateToken()
   }, [api])

   const loginSystem = async (userLogin: string, userPassword: string) => {
      // const data = await api.loginSystem(userLogin, userPassword) // Aqui me retorna o nome e o token
      //    if(data.user && data.token) {
      //       setUser(data.user)
      //       createToken(data.token)
      //       return true
      //    }

      // return false 

      const response = await api.loginSystem(userLogin, userPassword)
      console.log(response + ' no AuthProvider')
      // let test = JSON.parse(response.user)
      console.log(typeof response)

      if (response) {
         deleteToken()
         createToken(response.token)

         if (response.user) {
            console.log('User =>' + response.user)
            //setUser(JSON.parse(response.user))
            // console.log(user)
            console.log('O tipo de res.user no AuthProvider é: ' + typeof JSON.parse(response.user))

            //console.log(`O nome é: ${JSON.parse(response.user).userName}`)

            createUserDataToken((JSON.parse(response.user).userName), (JSON.parse(response.user).userAdmin))

            let data = JSON.parse(response.user)
            setUserData(data)
         }
         return true
      } else {
         alert('Dados incorretos ou inexistentes')
         return false
      }
   }

   const signIn = async (userLogin: string, userPassword: string) => {
      const response = await api.signIn(userLogin, userPassword)
      if (response.status === 200) {
         let data = JSON.parse(response.data.result)
         console.log(data)
         setUserData(data)

         //console.log((response.data.result.userName))
         deleteToken()
         createToken(response.token)
         createUserDataToken(response.data.userInfos[0], response.data.userInfos[1])

         return true
      } else {
         return false
      }

      /*if(response) {
         console.log(response + ' no AuthProvider')
         createToken(response.token)
         createUserDataToken((JSON.parse(response.user).userName), (JSON.parse(response.user).userAdmin))
         let data = JSON.parse(response.user)
            setUserData(data)

         return true
      } else {
         console.log('AuthProvider flase', response)
         return false
      }*/

      /*const login = await axios.post(`http://localhost:3001/login`, { userLogin, userPassword })
         .then(res => {
            if(res.status === 200) {
               deleteToken()
               createToken(res.data.token)
               console.log(res.data.userInfos[0], res.data.userInfos[1])
               //createUserDataToken(res.data.userInfos[0], res.data.userInfos[1])
               console.log(res.data)
               return res
            }
         })
         .catch(err => {
            console.log(`Erro no login, ${err}`)
            return err
         })
      return login*/
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
      // <AuthContext.Provider value={{ user, setUser, loginSystem, logout }}>
      <AuthContext.Provider value={{ user, signIn, logout, userData, setUserData }}>
         {children}
      </AuthContext.Provider>
   )
}
