import { createContext } from 'react';
import { ProductType } from '../../types/ProductType';

export type ProductsList = {
   products: ProductType[],
}

export const ProductsContext = createContext<ProductsList>({
   products: []
})