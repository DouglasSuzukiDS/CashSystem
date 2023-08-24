import { useContext, useEffect, useState } from "react"

import { ActionsType } from "../../types/ActionsType"

import { CartListContext } from "../../context/CartList/CartListContext"
import { MessageTexugo } from "../MessageTexugo/MessageTexugo"

import { CartCircleXMark } from "../../assets/Icons/CartCircleXMark"
import { CashRegister } from "../../assets/Icons/CashRegister"
import { Minus } from "../../assets/Icons/Minus"
import { Plus } from "../../assets/Icons/Plus"

export const CartList = ({ listProducts, returnItems }: ActionsType) => {

   const { cartList, setCartList } = useContext(CartListContext)

   useEffect(() => {
      setCartList(cartList)
   }, [cartList, setCartList])

   //console.log(`List Product in Context${products}`)

   const handleRemoveProductOnList = (id: string) => {
      setCartList(cartList.filter(item => item.id !== id))
   }

   const handleAddQty = (id?: string) => {
      // setQty(qty + 1)
      let itemQty = (document.querySelector(`#qty-${id}`) as HTMLInputElement)
      let quantity = parseInt(itemQty.innerHTML)
      itemQty.innerHTML = `${quantity + 1}`
      // console.log('add')
   }

   const handleMinusQty = (id?: string) => {
      // setQty(qty - 1)
      let itemQty = (document.querySelector(`#qty-${id}`) as HTMLInputElement)
      let quantity = parseInt(itemQty.innerHTML)
      itemQty.innerHTML = `${quantity - 1}`
      //console.log('remove')
   }

   let total = cartList.reduce(
      (sum, item) => sum + parseFloat(item.pdt_price), 0
   ).toFixed(2)

   return (
      <>
         { cartList ?
            <article className="containerCartList flex sbt column h-100 p-3">

               <div className="flex sbt w-100 mb-2">
                  <p className="w-100 text-center text-info">Lista de compras</p>

                  <div className="borderFormDanger flex inputValue">
                     <CashRegister w='24' h='24' fill='var(--dark-blue)' className='mr-1' />

                     <p className='inputTF text-danger'>
                        { total }
                     </p>
                  </div>
               </div>

               <div className="cartList flex sbt column w-10 h-100">
                  <section className="cartListSection w-100 h-100">

                     <table className="tableCartList f column sbt w-100 h-100">

                        <thead className="text-primary bold flex sbt w-100">
                           <tr>
                              <td className="itemName">Nome do Produto</td>
                              <td>QTD</td>
                              <td>Preço Unitário</td>
                              <td>Valor</td>
                           </tr>
                        </thead>

                        <tbody className="text-center w-100 column">
                           {cartList.map((prod, index) => (
                              <tr key={index}>
                                 <td className="itemName">
                                    <span>{prod.pdt_name}</span>

                                    <span className="flex">
                                       <CartCircleXMark w='16' h='16' fill='var(--bs-danger)' className="pointer" onClick={() => handleRemoveProductOnList(prod.id)} />
                                    </span>

                                 </td>

                                 <td className="flex">
                                    <Minus w='16' h='16' fill='var(--bs-danger)'
                                       className="pointer mr-1" onClick={() => {}} />
                                    <span id={`qty-${prod.id}`}>1</span>
                                    <Plus w='16' h='16' fill='var(--bs-success)'
                                       className="pointer ml-1" onClick={() => {}} />
                                 </td>
                                 <td>{prod.pdt_price}</td>
                                 <td>{parseFloat(prod.pdt_price).toFixed(2)}</td>
                              </tr>

                           ))}
                        </tbody>

                        <tfoot className="cartListFooter">
                           <tr className="f" >
                              <td>
                                 <p>
                                    Total
                                 </p>
                              </td>

                              <td className="cartListValue">
                                 <span>
                                    { total }
                                 </span>
                              </td>
                           </tr>
                        </tfoot>

                     </table>
                  </section>
               </div>
            </article> : <MessageTexugo th="100" tw="100" msg="Carrinho vazio, meu chapa" />
         }
      </>
   )
}