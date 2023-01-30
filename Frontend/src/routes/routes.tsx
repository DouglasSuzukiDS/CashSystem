import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllIcons from "../AllIcons";
import EditProduct from "../Components/EditProduct/EditProduct";
import EditUser from "../Components/EditUser/EditUser";

import FindProducts from "../Components/FindProducts/FindProducts";
import OpenCash from "../Components/OpenCash/OpenCash";
import { RequireAuth } from "../context/Auth/RequireAuth";
import Error from "../Pages/Error/Error";
import Login from "../Pages/Login/Login";
import OpenSystem from "../Pages/OpenSystem/OpenSystem";
import RegisterProduct from "../Pages/RegisterProduct/RegisterProduct";
import RegisterUser from "../Pages/RegisterUser/RegisterUser";
// import Login from "../Pages/Login/Login";


export default function RoutesApp() {
   return(
      <BrowserRouter>
         <Routes>
            {/*  */}
            {/* <Route path='/' element={ <AllIcons /> } />  */}
            <Route path='/findProducts' element={ <FindProducts /> } /> 

            <Route path='/' element={ <Login /> } /> 
            <Route path='/login' element={ <RequireAuth children={ <Login /> } />  } /> {/* OK */}

            <Route path="/registerNewUser" element={ <RegisterUser /> } /> {/* OK */}
            <Route path="/edit/user/:id" element={ < EditUser /> } /> {/* OK */}

            <Route path='/OpenCash' element={ <OpenCash /> } /> {/* OK */}
            <Route path='/OpenSystem' element={ <OpenSystem /> } />

            <Route path="/registerNewProduct" element={ <RegisterProduct /> } /> {/* OK */}
            <Route path="/edit/product/:id" element={ <EditProduct /> } /> {/* OK */}

            <Route path='*' element={ <Error /> } /> {/* OK  */}
         </Routes>
      </BrowserRouter>
   )
}