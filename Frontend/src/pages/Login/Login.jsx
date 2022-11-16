import axios from 'axios'
import dotenv from 'dotenv'
import JWT from 'jsonwebtoken'
import { Link } from 'react-router-dom'
import ArrowRightToBracket from "../../assets/Icons/ArrowRightToBracket";
import IdCard from "../../assets/Icons/IdCard";

dotenv.config()

function login() {
   const db = 'localhost:3001'
   const userLogin = document.querySelector('#userLogin')
   const userPassword = document.querySelector('#userPassword')

   if(userLogin.value && userPassword.value !== '') {
      // alert(`
      //    Login: ${userLogin}
      //    Senha: ${userPassword}
      // `)

      const login = userLogin.value
      const password = userPassword.value

      axios.get(`${db}/login`, {
         userLogin,
         userPassword
      })
   } else {
      alert('Colaborador, por obséquio logue com vossa matricula e senha. Caso contrário, sujeito a pancada. 🤜😵🤛')
   }
}

export default function Login() {
   return (
      <main className="container flex">
         <div className="forms">

            <form action='/' className="loginUser w-100 h-100  f column sbt">
               <h4 className="flex">
                  Identifique-se 
                  <IdCard w='25' h='25' fill='var(--bs-info)' className='ml-1' />
               </h4>

               <div className="inputForm">
                  <input type="text" name="userLogin" id="userLogin"
                     placeholder="Login / Matrícula"
                     required
                     onInvalid={e => e.target.setCustomValidity('Digite seu Login/Matrícula')}
                     onInput={e => e.target.setCustomValidity('')} />
               </div>

               <div className="inputForm">
                  <input type="password" name="userPassword" id="userPassword" required placeholder="Senha"
                     onInvalid={e => e.target.setCustomValidity('Digite a sua senha')}
                     onInput={e => e.target.setCustomValidity('')} />
               </div>

               <div className="actionsLogin f sbt " >
                  <Link to='/' className="ForgotPassword secondary-hover flex">
                     Esqueci minha senha
                  </Link>

                  <Link to='/registerNewUser' className="RegisterUserNow info-hover flex ">
                     Registrar Colaborador
                  </Link>
               </div>

               <Link to='/'
                  id="LogonUser"
                  className="LogonUser btn btn-info"
                  onClick={ login } >
                  Logar no Sistema 
                  <ArrowRightToBracket w='23' h='23' fill='var(--bs-dark)' className='ml-1' />
               </Link> 
            </form>
         </div>
      </main>
   )
}