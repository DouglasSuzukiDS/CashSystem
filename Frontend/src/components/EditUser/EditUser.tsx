import { useState, useEffect, useContext } from "react"
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
import { UserContext } from "../../context/User/UserContext"
import { UsersContext } from "../../context/Users/UsersContext"

export const EditUser = ({ close, id, listUsers }: ActionsType) => {
   const server = 'http://localhost:3001'
   
   // Get All Users
   // const [users, setUsers] = useState<UserType[]>([])
   const { users, setUsers } = useContext(UsersContext)
   const [user, setUser] = useState<UserType>({
      id: '',
      userName: '',
      userLogin: '',
      userPassword: '',
      userAdmin: false
   })

   useEffect(() => {  // Lista os Arquivos
      setUser(users.filter(userById => userById.id === id)[0])
   }, [])
      
   useEffect(() => {
      getUser()
   }, [user])

   const [newUserName, setNewUserName] = useState('')
   const [newUserLogin, setNewUserLogin] = useState('')
   const [newUserPassword, setNewUserPassword] = useState('')
   const [newUserAdmin, setNewUserAdmin] = useState(false)
   
   const getUser = async() => {
      console.log(user)

      setNewUserName(user.userName)
      setNewUserLogin(user.userLogin)
      setNewUserPassword(user.userPassword!)
      setNewUserAdmin(user.userAdmin)
   }

   const handleUpdateUser = async(id: string) => {

      if ((newUserName !== '') && (newUserLogin !== '') && (newUserPassword !== '')) {

         await axios.put(`${server}/edit/user/${id}`, {
            newUserName: newUserName,
            newUserLogin: newUserLogin,
            newUserPassword: newUserPassword,
            newUserAdmin: newUserAdmin
         })
            .then(response => {
               alert(response.data.msg)

               allUsers()
                  .then(setUsers)

               if(close) {
                  close()
               }

            })
            .catch(err => alert(err.response.data.msg))
      } else {
         alert('Preencha os campos')
      }
   }

   const handleUserAdmin = () => {
      return setNewUserAdmin(!newUserAdmin)
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
                     value={ newUserName }
                     onChange={ e => setNewUserName(e.target.value) }
                     required
                     onInvalid={e => (e.target  as HTMLInputElement).setCustomValidity('Digite o nome do novo colaborador')}
                     onInput={e => (e.target  as HTMLInputElement).setCustomValidity('')} />
               </div>

               <div className="inputForm">
                  <input type="text" name="newUserLogin" id="newUserLogin" 
                     placeholder="Login"
                     value={ newUserLogin }
                     onChange={ e => setNewUserLogin(e.target.value) }
                     required 
                     onInvalid={e => (e.target  as HTMLInputElement).setCustomValidity('Digite o login do novo colaborador')}
                     onInput={e => (e.target  as HTMLInputElement).setCustomValidity('')} />
               </div>

               <div className="inputForm">
                  <input type="password" name="newUserPassword" id="newUserPassword" 
                     placeholder="Senha"
                     value={ newUserPassword }
                     onChange={ e => setNewUserPassword(e.target.value) }
                     required 
                     onInvalid={e => (e.target  as HTMLInputElement).setCustomValidity('Digite uma senha para o novo colaborador')}
                     onInput={e => (e.target  as HTMLInputElement).setCustomValidity('')} />
               </div>

               <div className="isAdminDiv pointer flex" onClick={ handleUserAdmin } >
                  <span className="flex" id="isAdmin">
                     {
                        newUserAdmin ?
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