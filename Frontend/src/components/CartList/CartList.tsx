import { useEffect, useState } from "react"
import { CartCircleXMark } from "../../assets/Icons/CartCircleXMark"
import { Minus } from "../../assets/Icons/Minus"
import { Plus } from "../../assets/Icons/Plus"
import { ActionsType } from "../../types/ActionsType"
import { ProductType } from "../../types/ProductType"
import { MessageTexugo } from "../MessageTexugo/MessageTexugo"

export const CartList = ({ listProducts }: ActionsType) => {
   const [items, setItems] = useState<ProductType[]>([])
   const [qty, setQty] = useState(1)

   useEffect(() => {
      if (listProducts) {
         setItems(listProducts)
         console.log(listProducts)
      }
   }, [])

   const handleRemoveProductOnList = (id: string) => {
      console.log(items.filter(prod => prod.id !== id))
      // console.log(items.filter(prod => prod.id !== id))
      // items.filter(prod => prod.id !== id)
   }

   const handleAddQty = (id?: string) => {
      setQty(qty + 1)
   }

   const handleMinusQty = (id?: string) => {
      setQty(qty - 1)
   }

   return (
      <>
         {items.length >= 0 ?
            <article className="containerCartList flex column w-100 h-100 p-2">
               <p className="w-100 text-center text-info mb-2">Lista de compras</p>

               <div className="cartList flex sbt column w-100 h-100">
                  <section className="cartListSection w-100 h-100">

                     <table className="tableCartList f column sbt w-100 h-100">
                        <span className="w-100 h-100">
                           <thead className="text-primary bold flex sbt w-100">
                              <tr>
                                 <td>Nome do Produto</td>
                                 <td>QTD</td>
                                 <td>Preço Unitário</td>
                                 <td>Valor</td>
                              </tr>
                           </thead>

                           <tbody className="text-center w-100 column">
                              {items.map((prod) => (
                                 <tr>
                                    <td className="itemName">
                                       <span>{ prod.pdt_name }</span>

                                       <span className="flex">
                                          <CartCircleXMark w='16' h='16' fill='var(--bs-danger)' className="pointer" onClick={ () => handleRemoveProductOnList(prod.id) } />
                                       </span>
                                       
                                    </td>

                                    <td className="flex">
                                       <Minus w='16' h='16' fill='var(--bs-danger)' 
                                          className="pointer mr-1" onClick={ handleMinusQty } />
                                       { qty }
                                       <Plus w='16' h='16' fill='var(--bs-success)' 
                                          className="pointer ml-1" onClick={ handleAddQty } />
                                    </td>
                                    <td>{ prod.pdt_price }</td>
                                    <td>{ (parseFloat(prod.pdt_price) * qty).toFixed(2) }</td>
                                 </tr>

                              ))}
                           </tbody>
                        </span>

                        <tfoot className="cartListFooter flex sbt p-1 ">
                           <p>Total</p>
                           <span className="cartListValue text-danger">
                              { items.reduce(
                                 (sum, item) => sum + parseFloat(item.pdt_price), 0
                              ).toFixed(2) }
                           </span>
                        </tfoot>

                     </table>
                  </section>
               </div>
            </article> : <MessageTexugo th="100" tw="100" msg="Carrinho vazio, meu chapa" />
         }
      </>
   )
}