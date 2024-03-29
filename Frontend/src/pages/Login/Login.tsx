import { ChangeEvent, KeyboardEvent, useContext, useEffect, useState } from 'react'

import { Link, useNavigate } from 'react-router-dom'

import { AuthContext } from '../../context/Auth/AuthContext'

import { ArrowRightToBracket  } from "../../assets/Icons/ArrowRightToBracket"
import { IdCard } from "../../assets/Icons/IdCard"

export const Login = () => {
   const navigate = useNavigate()
   
   useEffect(() => {
      const authToken = localStorage.getItem('AuthToken')
      // console.log(authToken)

      if(authToken === null || authToken === undefined || authToken === '') {
         navigate('/') 
      } else {
         navigate('/OpenSystem') 
      }
   }, [])

   const auth = useContext(AuthContext)
   
   const [userLogin, setUserLogin] = useState('')
   const [userPassword, setUserPassword] = useState('')
   const [loading, setLoading] = useState(false)

   const handleUserLogin = (e: ChangeEvent<HTMLInputElement>) => {
      setUserLogin(e.target.value)
   }

   const handleUserPassword = (e: ChangeEvent<HTMLInputElement>) => {
      setUserPassword(e.target.value)
   }

   const handleLogin = async() => {
      if(userLogin && userPassword) {
         console.log(`userLogin: ${userLogin}, userPassword: ${userPassword}`)
         
         setLoading(true)

         const logged = await auth.signIn(userLogin, userPassword)
        //  alert('Login Logged' + logged)
        // alert(logged)

         if(logged) {
            navigate('/OpenSystem')
         } else {
            // alert('Falha ao logar. MSG do Component Login')
            alert('Login ou senha inválidos')
            setLoading(false)
         }
      }

      setLoading(false)
   }

   const handleLoginWithEnterButton = (e: KeyboardEvent<HTMLInputElement>) => {
      if(e.code.toLocaleLowerCase() === 'enter') {
         if(userLogin !== '' && userPassword !== '') {
            handleLogin()
         } else {
            alert('Por obséquio, preencha os campos')
         }
      }
   }
   
   return (
      <main className="container flex z-index-50">
         <div className="forms">

            <section className="loginUser w-100 h-100  f column sbt">
               <h4 className="flex">
                  Identifique-se
                  <IdCard w='25' h='25' fill='var(--bs-info)' className='ml-1' />
               </h4>

               <div className="inputForm">
                  <input type="text" name="userLogin" id="userLogin"
                     placeholder="Login / Matrícula"
                     required
                     onChange={ handleUserLogin }
                     onInvalid={e => (e.target as HTMLInputElement).setCustomValidity('Digite seu Login/Matrícula')}
                     onInput={e => (e.target as HTMLInputElement).setCustomValidity('')} />
               </div>

               <div className="inputForm">
                  <input type="password" name="userPassword" id="userPassword"
                     required
                     onChange={ handleUserPassword }
                     placeholder="Senha"
                     onInvalid={e => (e.target as HTMLInputElement).setCustomValidity('Digite a sua senha')}
                     onInput={e => (e.target as HTMLInputElement).setCustomValidity('') } 
                     onKeyUp={ handleLoginWithEnterButton } />
               </div>

               <div className="actionsLogin f sbt " >
                  <Link to='/' className="ForgotPassword secondary-hover flex">
                     Esqueci minha senha
                  </Link>

                  <Link to='/registerNewUser' className="RegisterUserNow info-hover flex ">
                     Registrar Colaborador
                  </Link>
               </div>

                {
                  loading ? 
                     <button
                        id="LogonUser"
                        className="LogonUser btn btn-info" >
                        Aguarde ...
                     </button> :

                     <button
                        id="LogonUser"
                        className="LogonUser btn btn-info"
                        onClick={ handleLogin } >
                        Logar no Sistema
                        <ArrowRightToBracket w='23' h='23' fill='var(--text-color)' className='ml-1' />
                  </button>
               }
               
            </section>
         </div>
      </main>
   )
}