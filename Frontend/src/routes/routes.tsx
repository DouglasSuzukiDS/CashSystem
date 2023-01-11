import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllIcons from "../AllIcons";
import EditProduct from "../components/EditProduct/EditProduct";
import EditUser from "../components/EditUser/EditUser";
import Error from "../pages/Error/Error";
import Login from "../pages/Login/Login";
import RegisterProduct from "../pages/RegisterProduct/RegisterProduct";
import RegisterUser from "../pages/RegisterUser/RegisterUser";
// import Login from "../pages/Login/Login";


export default function RoutesApp() {
   return(
      <BrowserRouter>
         <Routes>
            <Route path='/' element={ <AllIcons /> } /> 
            {/* <Route path='/login' element={ <Login /> } />  */}
            <Route path='/login' element={ <Login /> } />
            <Route path="/registerNewUser" element={ <RegisterUser /> } />
            <Route path="/edit/user/:id" element={ <EditUser /> } />

            <Route path="/registerNewProduct" element={ <RegisterProduct /> } />
            <Route path="/edit/product/:id" element={ <EditProduct /> } />
            <Route path='*' element={ <Error /> } /> 
         </Routes>
      </BrowserRouter>
   )
}