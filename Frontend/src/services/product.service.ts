import axios from "axios";
import { ProductType } from "../types/ProductType";

const server: string = 'http://localhost:3001'

export const allProducts = async (): Promise<ProductType[]> => {
  return await axios.get(`${server}/products`)
    .then(({ data }) => data.result)
    .catch(e => console.log(e))
}

export const findProductById = async (id: string): Promise<ProductType> => {
  const productById = (product: ProductType) => product.id === id

  const productOrNone = (await allProducts()).find(productById);

  if (!productOrNone) {
    return Promise.reject("Product Not Found");
  }

  return productOrNone;
};