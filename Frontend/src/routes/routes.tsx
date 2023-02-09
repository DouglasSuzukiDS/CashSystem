import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllIcons from "../AllIcons";
import EditProduct from "../Components/EditProduct/EditProduct";
import EditUser from "../Components/EditUser/EditUser";

import FindProducts from "../Components/FindProducts/FindProducts";
import OpenCash from "../Components/OpenCash/OpenCash";
import { AuthProvider } from "../context/Auth/AuthProvider";
import { RequireAuth } from "../context/Auth/RequireAuth";
import Error from "../Pages/Error/Error";
import Login from "../Pages/Login/Login";
import OpenSystem from "../Pages/OpenSystem/OpenSystem";
import RegisterProduct from "../Pages/RegisterProduct/RegisterProduct";
import RegisterUser from "../Pages/RegisterUser/RegisterUser";
// import Login from "../Pages/Login/Login";


export default function RoutesApp() {
   return(
      <AuthProvider>
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
               <Route path="/edit/product/:id" element={ 
                  <RequireAuth children={< EditProduct /> } />
               } /> 

               <Route path='*' element={ <Error /> } /> {/* OK  */}
            </Routes>
         </BrowserRouter>
      </AuthProvider>
   )
}