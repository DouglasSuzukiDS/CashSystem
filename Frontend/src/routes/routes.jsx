import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "../Components/Form/Form";
import Error from "../pages/Error/Error";
// import Login from "../pages/Login/Login";

export default function RoutesApp() {
   return(
      <>
         <BrowserRouter>
            <Routes>
               <Route path='/' element={ <Form /> }/>
               <Route path='*' element={ <Error /> } />
            </Routes>
         </BrowserRouter>
      </>
   )
}