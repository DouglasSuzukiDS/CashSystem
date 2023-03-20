import { useContext, useState } from "react"
import { ProductType } from "../../types/ProductType"
import { CartListContext } from "./CartListContext"

export const CartListProviver = ({ children } : { children: JSX.Element } ) => {
   const [cartList, setCartList] = useState<ProductType[]>([])

   return( 
      <CartListContext.Provider value={{ cartList, setCartList }}>
         { children }
      </CartListContext.Provider>
   )
}