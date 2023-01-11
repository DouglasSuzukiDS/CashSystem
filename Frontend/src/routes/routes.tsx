import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllIcons from "../AllIcons";
import Error from "../pages/Error/Error";
import Login from "../pages/Login/Login";
// import Login from "../pages/Login/Login";


export default function RoutesApp() {
   return(
      <BrowserRouter>
         <Routes>
            <Route path='/' element={ <AllIcons /> } /> 
            {/* <Route path='/login' element={ <Login /> } />  */}
            <Route path='/login' element={<Login />} />
            <Route path='*' element={ <Error /> } /> 
         </Routes>
      </BrowserRouter>
   )
}