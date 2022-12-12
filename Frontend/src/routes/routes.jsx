import { BrowserRouter, Routes, Route } from "react-router-dom";
import Closing from "../Components/Closing/Closing";
import FindProducts from "../Components/FindProducts/FindProducts";
import EditProduct from "../Components/EditProduct/EditProduct";
import Invoicing from "../Components/Invoicing/Invoice";
import OpenCash from "../Components/OpenCash/OpenCash";

import Error from "../pages/Error/Error";
import Login from "../pages/Login/Login";
import OpenSystem from "../pages/OpenSystem/OpenSystem";
import RegisterProduct from "../pages/RegisterProduct/RegisterProduct";
import RegisterUser from "../pages/RegisterUser/RegisterUser";
import EditUser from "../Components/EditUser/EditUser";

export default function RoutesApp() {
   return(
      <>
         <BrowserRouter>
            <Routes>
               <Route path='/:id' element={ <EditUser /> } />
               <Route path='/openSystem' element={ <OpenSystem /> } />
               <Route path='/findProducts' element={ <FindProducts /> } />
               <Route path='/edit/product/:id' element={ <EditProduct /> } />
               <Route path='/opencash' element={ <OpenCash /> } />
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