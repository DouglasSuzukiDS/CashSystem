import { useState, useEffect } from "react"
import axios from 'axios'
import { ActionsType } from "../../types/ActionsType"
import { UserType } from "../../types/UserType"

import { allUsers, findUserById } from "../../services/user.service"

import { Square } from "../../assets/Icons/Square"
import { SquareXMark } from "../../assets/Icons/SquareXMark"
import { UserPen } from "../../assets/Icons/UserPen"
import { UserPlus } from "../../assets/Icons/UserPlus"
import { ArrowLeftLong } from "../../assets/Icons/ArrowLeftLong"
import { XMark } from "../../assets/Icons/XMark"

export const EditUser = ({ close, id, listUsers }: ActionsType) => {
   const server = 'http://localhost:3001'
   
   // Get All Users
   const [users, setUsers] = useState<UserType[]>([])
   const [user, setUser] = useState<UserType>({
      id: '',
      userName: '',
      userLogin: '',
      userPassword: '',
      userAdmin: false
   })
   const [admin, setAdmin] = useState(false)

   useEffect(() => {  // Lista os Arquivos
      if(listUsers) {
         setUsers(listUsers)

         findUserById(id!)
            .then(setUser)
            .catch(e => console.log(e))

         allUsers()
            .then(setUsers)
            .catch(e => console.log(e))
         }
      }, [])
      
   useEffect(() => {
      getUser()
   }, [users])

   let newUserName = document.querySelector('#newUserName') as HTMLInputElement
   let newUserLogin = document.querySelector('#newUserLogin') as HTMLInputElement
   let newUserPassword = document.querySelector('#newUserPassword') as HTMLInputElement
   let newUserAdmin = document.querySelector('#isAdmin') as HTMLSpanElement | Boolean
   
   const getUser = async() => {
      /*await axios.get(`${server}/user/${id}`)
         .then(response => {
            let userName = response.data.result[0].userName 
            let userLogin = response.data.result[0].userLogin 
            let userPassword = response.data.result[0].userPassword 
            let userAdmin = response.data.result[0].userAdmin 
            // console.log(`User admin?: ${userAdmin}`)
            userAdmin ? setAdmin(true) : setAdmin(false)

            newUserName.value = userName
            newUserLogin.value = userLogin
            newUserPassword.value = userPassword
            newUserAdmin = userAdmin

            // console.log('Valor do admin é: ' + newUserAdmin)
            // console.log('bc ' + newUserAdmin)
            // console.log(response)
         })
         .catch(err => alert(err.response.data))*/
      // console.log(`O user para edit é ${user}`)

      newUserName.value = user.userName
      newUserLogin.value = user.userLogin
      newUserPassword.value = user.userPassword!
      newUserAdmin = user.userAdmin
   }

   //getUser()

   const handleUpdateUser = async(id: string) => {

      if ((newUserName.value !== '') && (newUserLogin.value !== '') && (newUserPassword.value !== '')) {

         await axios.put(`${server}/edit/user/${id}`, {
            newUserName: newUserName.value,
            newUserLogin: newUserLogin.value,
            newUserPassword: newUserPassword.value,
            newUserAdmin: admin
         })
            .then(response => {
               alert(response.data.msg)

               if(close) {
                  close()
               }

            })
            //.then(setTimeout(() => { navigate('/') }, 5000))
            //.then( alert('Usuario cadastrado no sistema com sucesso') )
            .catch(err => alert(err.response.data.msg))
      } else {
         alert('Preencha os campos')
      }
   }

   const handleUserAdmin = () => {
      return setAdmin(!admin)
   }

   return (
      <>
         <section className="editUserForm w-100 h-100 f column sbt z-index-50">
               <h4 className="flex sbt">
                  <div className="flex text-center w-100">   
                     Edição de Usuário
                     <UserPlus w='24' h='24' fill='#0DCAF0' className='ml-1' />
                  </div>

                  <div id='closeEditUser' className="flex">
                     <XMark w='24' h='24'
                        className=''
                        onClick={ close } />
                  </div>
               </h4>

               <div className="inputForm">
                  <input type="text" name="newUserName" id="newUserName"
                     placeholder="Nome Completo"
                     required
                     onInvalid={e => (e.target  as HTMLInputElement).setCustomValidity('Digite o nome do novo colaborador')}
                     onInput={e => (e.target  as HTMLInputElement).setCustomValidity('')} />
               </div>

               <div className="inputForm">
                  <input type="text" name="newUserLogin" id="newUserLogin" required placeholder="Login"
                     onInvalid={e => (e.target  as HTMLInputElement).setCustomValidity('Digite o login do novo colaborador')}
                     onInput={e => (e.target  as HTMLInputElement).setCustomValidity('')} />
               </div>

               <div className="inputForm">
                  <input type="password" name="newUserPassword" id="newUserPassword" required placeholder="Senha"
                     onInvalid={e => (e.target  as HTMLInputElement).setCustomValidity('Digite uma senha para o novo colaborador')}
                     onInput={e => (e.target  as HTMLInputElement).setCustomValidity('')} />
               </div>

               <div className="isAdminDiv pointer flex" onClick={ handleUserAdmin } >
                  <span className="flex" id="isAdmin">
                     {
                        admin ?
                           <SquareXMark w='24' h='24' fill='#0DCAF0' /> /* TRUE */ :
                           <Square w='24' h='24' fill='#0DCAF0' /> /* FALSE */
                     }
                  </span>
                  <p className="ml-2 text-color bold italic">Usuário Administrador</p>
               </div>

               <button
                  id="submitNewUser"
                  className="submitNewUser btn btn-info"
                  onClick={ () => handleUpdateUser(`${id}`) } >
                  Atualizar dados
                  <UserPen w='24' h='24' fill='var(--bs-dark)' className='ml-2' />
               </button>

               <button className="btn btn-warning" onClick={ close } >
                  Voltar
                  <ArrowLeftLong w='24' h='24' fill='var(--bs-dark)' className='ml-1' />
               </button>
         </section>
      </>
   )
}