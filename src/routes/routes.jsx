import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "../pages/Error/Error";
import Login from "../pages/Login/Login";

export default function RoutesApp() {
   return(
      <>
         <BrowserRouter>
            <Routes>
               <Route path='/' element={ <Login /> }/>
               <Route path='*' element={ <Error /> } />
            </Routes>
         </BrowserRouter>
      </>
   )
}