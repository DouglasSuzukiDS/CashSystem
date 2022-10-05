import { Link } from "react-router-dom"

export default function Login() {
   return(
      <>
      <main className="container flex">
         <div className="box">

            <div className="form">
               <h2>Identifique-se</h2>

               <div className="inputBox">
                  <input type="text" required />
                  <span>Matricula</span>
                  <i></i>
               </div>

               <div className="inputBox">
                  <input type="password" required />
                  <span>Senha</span>
                  <i></i>
               </div>

               <div className="linksBox">
                  <Link to='/'>Esqueci minha senha</Link>
                  <Link to='/'>Registrar Funcionário</Link>
               </div>

               <input type="submit" value="Entrar" />
            </div>
         </div>
      </main>
      </>
   )
}