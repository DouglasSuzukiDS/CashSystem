import { BrowserRouter, Routes, Route } from "react-router-dom";
import Closing from "../Components/Closing/Closing";
import Invoicing from "../Components/Invoicing/Invoice";

import Error from "../pages/Error/Error";
import Login from "../pages/Login/Login";
import OpenSystem from "../pages/OpenSystem/OpenSystem";
import RegisterProduct from "../pages/RegisterProduct/RegisterProduct";
import RegisterUser from "../pages/RegisterUser/RegisterUser";

export default function RoutesApp() {
   return(
      <>
         <BrowserRouter>
            <Routes>
               <Route path='/' element={ <OpenSystem /> } />
               <Route path='/closing' element={ <Closing /> } />
               <Route path='/invoicing' element={ <Invoicing /> }/>
               <Route path='/login' element={ <Login /> }/>
               <Route path='/registerNewUser' element={ <RegisterUser /> } />
               <Route path='/registerNewProduct' element={ <RegisterProduct/> }/>
               <Route path='*' element={ <Error /> } />
            </Routes>
         </BrowserRouter>
      </>
   )
}