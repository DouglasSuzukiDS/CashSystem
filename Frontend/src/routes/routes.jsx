import { BrowserRouter, Routes, Route } from "react-router-dom";
import Invoicing from "../Components/Invoicing/Invoice";

import Error from "../pages/Error/Error";
import Login from "../pages/Login/Login";
import RegisterProduct from "../pages/RegisterProduct/RegisterProduct";
import RegisterUser from "../pages/RegisterUser/RegisterUser";

export default function RoutesApp() {
   return(
      <>
         <BrowserRouter>
            <Routes>
               <Route path='/' element={ <Invoicing /> }/>
               <Route path='/login' element={ <Login /> }/>
               <Route path='/registerNewUser' element={ <RegisterUser /> } />
               <Route path='/registerNewProduct' element={ <RegisterProduct/> }/>
               <Route path='*' element={ <Error /> } />
            </Routes>
         </BrowserRouter>
      </>
   )
}