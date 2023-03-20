import { createContext } from "react"
import { ProductType } from "../../types/ProductType"

type CartList = {
   cartList: ProductType[],
   setCartList: (newState: ProductType[]) => void 
}

const initialValue = {
   cartList: [],
   setCartList: () => {}
}

export const CartListContext = createContext<CartList>(initialValue)