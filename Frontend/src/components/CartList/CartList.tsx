import { useEffect, useState } from "react"
import { CartCircleXMark } from "../../assets/Icons/CartCircleXMark"
import { Minus } from "../../assets/Icons/Minus"
import { Plus } from "../../assets/Icons/Plus"
import { ActionsType } from "../../types/ActionsType"
import { ProductType } from "../../types/ProductType"
import { MessageTexugo } from "../MessageTexugo/MessageTexugo"

export const CartList = ({ listProducts }: ActionsType) => {
   const [cartItems, setCartItems] = useState<ProductType[]>([])

   useEffect(() => {
      if (listProducts) {
         setCartItems(listProducts)
      }
   }, [])
   return (
      <>
         {cartItems.length >= 0 ?
            <article className="containerCartList flex column w-100 h-100 p-2">
               <>
                  <p className="w-100 text-center text-info pb-2">Lista de compras</p>
                  <div className="cartList flex sbt column w-100 h-100">
                     <section className="cartListSection">

                        <table className="tableCartList">
                           <thead className="text-primary bold">
                              <tr>
                                 <td colSpan={2}>Nome do Produto</td>
                                 <td>QTD</td>
                                 <td>Preço Unitário</td>
                                 <td>Valor</td>
                              </tr>
                           </thead>

                           <tbody className="text-center">
                              <tr>
                                 {cartItems.map((prod) => (
                                    <>
                                       <tr>
                                          <td>{prod.pdt_name}</td>
                                          <td>
                                             <CartCircleXMark w='16' h='16' fill='var(--bs-danger)' className="pointer mr-1" />
                                          </td>
                                          <td className="flex">
                                             <Minus w='16' h='16' fill='var(--bs-danger)' className="pointer mr-1" />
                                             2
                                             <Plus w='16' h='16' fill='var(--bs-success)' className="pointer ml-1" />
                                          </td>
                                          <td>{ prod.pdt_price }</td>
                                          <td>10,00</td>
                                       </tr>

                                    </>

                                 ))}

                              </tr>
                           </tbody>

                           {/* <tbody className="text-center">
                                 <tr>
                                    <td>Heineken 269M</td>
                                    <td>
                                       <CartCircleXMark w='16' h='16' fill='var(--bs-danger)' className="pointer mr-1" />
                                    </td>
                                    <td className="flex">
                                       <Minus w='16' h='16' fill='var(--bs-danger)' className="pointer mr-1" />
                                       2
                                       <Plus w='16' h='16' fill='var(--bs-success)' className="pointer ml-1"  />
                                    </td>
                                    <td>4,00</td>
                                    <td>8,00</td>
                                 </tr>

                                 <tr>
                                    <td>Brizadeiro</td>
                                    <td>
                                       <CartCircleXMark w='16' h='16' fill='var(--bs-danger)' className="pointer mr-1" />
                                    </td>
                                    <td className="flex">
                                       <Minus w='16' h='16' fill='var(--bs-danger)' className="pointer mr-1" />
                                       1
                                       <Plus w='16' h='16' fill='var(--bs-success)' className="pointer ml-1"  />
                                    </td>
                                    <td>5,00</td>
                                    <td>5,00</td>
                                 </tr>

                                 <tr>
                                    <td>Kit Noia</td>
                                    <td>
                                       <CartCircleXMark w='16' h='16' fill='var(--bs-danger)' className="pointer mr-1" />
                                    </td>
                                    <td className="flex">
                                       <Minus w='16' h='16' fill='var(--bs-danger)' className="pointer mr-1" />
                                       1
                                       <Plus w='16' h='16' fill='var(--bs-success)' className="pointer ml-1"  />
                                    </td>
                                    <td>10,00</td>
                                    <td>10,00</td>
                                 </tr>

                                 <tr>
                                    <td>Jack Daniels c/ Gelo & Red Bull</td>
                                    <td>
                                       <CartCircleXMark w='16' h='16' fill='var(--bs-danger)' className="pointer mr-1" />
                                    </td>
                                    <td className="flex">
                                       <Minus w='16' h='16' fill='var(--bs-danger)' className="pointer mr-1 hover-danger" />
                                       1
                                       <Plus w='16' h='16' fill='var(--bs-success)' className="pointer ml-1 hover-success" />
                                    </td>
                                    <td>35,00</td>
                                    <td>35,00</td>
                                 </tr>
                           </tbody> */}
                        </table>
                     </section>

                     <footer className="cartListFooter flex sbt w-100 p-1 ">
                        <p>Total</p>
                        <span className="cartListValue text-danger">R$ 43,00</span>
                     </footer>
                  </div>
               </>
            </article> : <MessageTexugo th="100" tw="100" msg="Carrinho vazio, meu chapa" />
         }
      </>
   )
}