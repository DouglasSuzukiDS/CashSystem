import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "../context/Auth/AuthProvider";
import { Login } from "../pages/Login/Login";
import { OpenSystem } from "../pages/OpenSystem/OpenSystem";
import { Error } from "../pages/Error/Error";
import { ProductProvider } from "../context/Products/ProductProvider";
import { CartListProviver } from "../context/CartList/CartListProvider";
import { ValuesSalesProvider } from "../context/ValuesSales/ValuesSalesProvider";

export default function RoutesApp() {
   return(
      <AuthProvider>
         <ProductProvider>
            <CartListProviver>
               <ValuesSalesProvider>
                  <BrowserRouter>
                     <Routes>
                        <Route path='/' element={ <Login /> } /> 

                        {/* <Route path="/registerNewUser" element={ 
                           <RequireAuth children= { <RegisterUser /> } /> 
                        } />  */}

                        {/* <Route path="/edit/user/:id" element={ 
                           <RequireAuth children= { <EditUser /> } />
                        } />  */}

                        <Route path='/OpenSystem' element={ <OpenSystem /> } />

                        {/* <Route path="/edit/product/:id" element={ 
                           <RequireAuth children={< EditProduct /> } />
                        } />  */}

                        <Route path='*' element={ <Error /> } /> {/* OK  */}
                     </Routes>
                  </BrowserRouter>
               </ValuesSalesProvider>
            </CartListProviver>
         </ProductProvider>
      </AuthProvider>
   )
}