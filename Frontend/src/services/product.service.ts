import axios from "axios";
import { Product } from "../types/ProductType";

const server: string = 'http://localhost:3001'

export const allProducts = async (): Promise<Product[]> => {
  return await axios.get(`${server}/products`)
    .then(({ data }) => data.result)
    .catch(e => console.log(e))
}

export const findProductById = async (id: string): Promise<Product> => {
  const productById = (product: Product) => product.id === id

  const productOrNone = (await allProducts()).find(productById);

  if (!productOrNone) {
    return Promise.reject("Product Not Found");
  }

  return productOrNone;
};