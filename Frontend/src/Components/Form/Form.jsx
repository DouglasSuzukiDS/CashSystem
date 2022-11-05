import { Link } from "react-router-dom"
import UserPlus from "../../assets/Icons/UserPlus"

export default function Form(props) {
   return (
      <>
         <main className="container flex">
            <div className="forms border">

               <div className="">
                  <h3 className="flex">
                     {/* { props.phase } */}
                     Identifique-se
                     {/* { props.icon } */}
                     <UserPlus w='32' h='32' fill='#0DCAF0' className='ml-1'/>
                  </h3>

                  <div className="">
                     <input type="text" required />
                     <span>Matricula</span>
                     <i></i>
                  </div>

                  <div className="">
                     <input type="password" required />
                     <span>Senha</span>
                     <i></i>
                  </div>

                  <div className="">
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