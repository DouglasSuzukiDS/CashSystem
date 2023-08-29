import { useContext, useState } from "react"
import axios from 'axios'

import { ActionsType } from "../../types/ActionsType"

import { Square } from "../../assets/Icons/Square"
import { SquareXMark } from "../../assets/Icons/SquareXMark"
import { UserPen } from "../../assets/Icons/UserPen"
import { UserPlus } from "../../assets/Icons/UserPlus"
import { XMark } from "../../assets/Icons/XMark"
import { CircleCheck } from "../../assets/Icons/CircleCheck"
import { allUsers } from "../../services/user.service"
import { UsersContext } from "../../context/Users/UsersContext"

export const RegisterUser = ({ close }: ActionsType) => {
   const server: string = 'http://localhost:3001'

   const { users, setUsers } = useContext(UsersContext)

   const [newUserFullName, setNewUserFullName] = useState('')
   const [newUserLogin, setNewUserLogin] = useState('')
   const [newUserPassword, setNewUserPassword] = useState('')
   const [newUserAdmin, setNewUserAdmin] = useState(false)

   const newUserRegister = async() => {

      if ((newUserFullName !== '') && (newUserLogin !== '') && (newUserPassword !== '')) {

         await axios.post(`${server}/registerNewUser`, {
            newUserFullName: newUserFullName,
            newUserLogin: newUserLogin,
            newUserPassword: newUserPassword,
            newUserAdmin: newUserAdmin
         })
            .then(response => {
               alert(response.data.msg) // Aqui recebe a resposta do Backend 

               allUsers()
                  .then(setUsers)
            })
            .catch(err => console.log(err))
      } else {
         alert('Preencha os campos')
      }

      setNewUserFullName('')
      setNewUserLogin('')
      setNewUserPassword('')
      setNewUserAdmin(false)
   }

   return (
      <>
         <main className="container flex z-index-50">
            <div className="forms">

               <section className="registerNewUser w-100 h-100  f column sbt">
                  <h4 className="flex sbt">
                     <div className="flex text-center w-100">
                        <h5>Registro de Usuário</h5>
                        <UserPlus w='24' h='24' fill='#0DCAF0' className='ml-1' />
                     </div>

                     <div id="closeNewUser" className="flex">
                        <XMark w='24' h='24'
                           className=''
                           onClick={close}
                        />
                     </div>
                  </h4>

                  <div className="inputForm">
                     <input type="text" name="newUserName" id="newUserName"
                        placeholder="Nome Completo"
                        value={ newUserFullName }
                        onChange={ e => setNewUserFullName(e.target.value) }
                        required
                        onInvalid={e => (e.target as HTMLInputElement).setCustomValidity('Digite o nome do novo colaborador')}
                        onInput={e => (e.target as HTMLInputElement).setCustomValidity('')} />
                  </div>

                  <div className="inputForm">
                     <input type="text" name="newUserLogin" id="newUserLogin" 
                        placeholder="Login"
                        value={ newUserLogin }
                        onChange={ e => setNewUserLogin(e.target.value) }
                        required 
                        onInvalid={e => (e.target as HTMLInputElement).setCustomValidity('Digite o login do novo colaborador')}
                        onInput={e => (e.target as HTMLInputElement).setCustomValidity('')} />
                  </div>

                  <div className="inputForm">
                     <input type="password" name="newUserPassword" id="newUserPassword"
                        placeholder="Senha"
                        value={ newUserPassword }
                        onChange={ e => setNewUserPassword(e.target.value) }
                        required 
                        onInvalid={e => (e.target as HTMLInputElement).setCustomValidity('Digite uma senha para o novo colaborador')}
                        onInput={e => (e.target as HTMLInputElement).setCustomValidity('')} />
                  </div>

                  <div className="isAdminDiv pointer flex" onClick={() => setNewUserAdmin(!newUserAdmin)}>
                     <span className="flex" id="isAdmin" >
                        {
                           newUserAdmin?
                              <SquareXMark w='24' h='24' fill='#0DCAF0' className='mr-2' /> /* TRUE */ :
                              <Square w='24' h='24' fill='#0DCAF0' className='mr-2' /> /* FALSE */
                        }
                     </span>
                     <p className="text-color">Usuário Administrador</p>
                  </div>

                  <button
                     id="submitNewUser"
                     className="submitNewUser btn btn-info"
                     onClick={newUserRegister} >
                     Registrar Funcionário
                     <UserPen w='24' h='24' fill='var(--bs-dark)' className='ml-2' />
                  </button>

                  <button className="btn btn-success" onClick={ close } >
                     Ok
                     <CircleCheck w='24' h='24' fill='var(--text)' className='ml-1' />
                  </button>
               </section>
            </div>
         </main>
      </>
   )
}