import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllIcons from "../AllIcons";
import { EditProduct } from "../components/EditProduct/EditProduct";
import { EditUser } from "../components/EditUser/EditUser";

import { FindProducts } from "../components/FindProducts/FindProducts";
import { OpenCash } from "../components/OpenCash/OpenCash";
import { AuthProvider } from "../context/Auth/AuthProvider";
import { RequireAuth } from "../context/Auth/RequireAuth";
import { Login } from "../pages/Login/Login";
import { OpenSystem } from "../pages/OpenSystem/OpenSystem";
import { RegisterProduct } from "../pages/RegisterProduct/RegisterProduct";
import { RegisterUser } from "../pages/RegisterUser/RegisterUser";
import { Error } from "../pages/Error/Error";
import { ProductProvider } from "../context/Products/ProductProvider";
import { CartListProviver } from "../context/CartList/CartListProvider";
import { ConfirmPayment } from "../components/ConfirmPayment/ConfirmPaymanet";

// import Login from "../pages/Login/Login";


export default function RoutesApp() {
   return(
      <AuthProvider>
         <ProductProvider>
            <CartListProviver>
               <BrowserRouter>
                  <Routes>
                     {/*  */}
                     {/* <Route path='/' element={ <AllIcons /> } />  */}
                     <Route path='/findProducts' element={ <FindProducts /> } /> 

                     <Route path='/' element={ <Login /> } /> 

                     {/* <Route path='/login' element={  <Login /> } />  */}

                     <Route path="/registerNewUser" element={ 
                        <RequireAuth children= { <RegisterUser /> } /> 
                     } /> 

                     <Route path="/edit/user/:id" element={ 
                        <RequireAuth children= { <EditUser /> } />
                     } /> 

                     <Route path='/OpenCash' element={ <OpenCash /> } /> {/* OK */}
                     <Route path='/OpenSystem' element={ <OpenSystem /> } />

                     <Route path="/registerNewProduct" element={ <RegisterProduct /> } /> {/* OK */}
                     {/* <Route path="/edit/product/:id" element={ 
                        <RequireAuth children={< EditProduct /> } />
                     } />  */}
                     <Route path="/edit/product/:id" element={ < EditProduct /> } /> 

                     <Route path='/findProduct' element={ <FindProducts /> } />

                     <Route path='*' element={ <Error /> } /> {/* OK  */}
                  </Routes>
               </BrowserRouter>
            </CartListProviver>
         </ProductProvider>
      </AuthProvider>
   )
}