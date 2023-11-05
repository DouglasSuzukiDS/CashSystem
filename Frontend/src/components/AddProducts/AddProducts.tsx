import { ChangeEvent, useContext, useEffect, useState } from "react"

import { ProductType } from "../../types/ProductType"
import { ActionsType } from "../../types/ActionsType"

import { ProductsContext } from "../../context/Products/ProductsContext"
import { CartListContext } from "../../context/CartList/CartListContext"

import { CircleCheck } from "../../assets/Icons/CircleCheck"
import { MagnifyingGlass  }from "../../assets/Icons/MagnifyingGlass"
import { XMark } from "../../assets/Icons/XMark"
import { CartCirclePlus } from "../../assets/Icons/CartCirclePlus"

export const AddProducts = ({ close, id, listProducts, cartAddItem }: ActionsType) => {

   const { products, setProducts } = useContext(ProductsContext)
   const { cartList, setCartList } = useContext(CartListContext)

   // Get All Products
   //const [products, setProducts] = useState<ProductType[]>([]) // First Search on List
   const [cloneProducts, setCloneProducts] = useState<ProductType[]>(products) // List if Search is empty
   const [findProducts, setFindProducts] = useState<ProductType[]>(products) // List if Search is empty
   const [addProductModel, setAddProductModal] = useState(false)

   // Return Product in Search
   const returnProduct = async (e: ChangeEvent<HTMLInputElement>) => {
      let term = e.target.value

      if (term === '') {
         // console.log('O term é: ' + term)
         //console.log(cloneProducts)
         setCloneProducts(products)
        
      } else {
         let search = term.replace(term[0], term[0].toLocaleUpperCase())
         // setProducts(find.filter(prod => prod.pdt_name.includes(search)))
         // setProducts(find.filter(prod => prod.pdt_type.includes(search)))
         //console.log(search)
         
         let findByName = cloneProducts.filter(prod => prod.pdt_name.includes(search))
         //console.log(findByName)

         let findByType = cloneProducts.filter(prod => prod.pdt_type.includes(search))

         if (findByName.length !== 0) {
            setProducts(findByName)
            // console.log(products)
         } else {
            setProducts(findByType)
         }
      }

   }

   // Edit Product by ID
   const handleAddProduct = async (id: string) => {
      // Função responsável por passar o ID via prop para o EditProduct, consequentemente buscando o dado no Backend para Editar e mostrar o modal

      console.log(cloneProducts.filter(el => el.id === id)[0])
      const addProd = cloneProducts.filter(el => el.id === id)
      setCartList(addProd)
      cartAddItem?.(addProd[0])
   }

   return (
      <article className="container flex pr-3  w-100 h-100 z-index-50" id='FindProductModal'>

         <div className="forms">

            {!addProductModel &&
               <form action='/' className="findProductsForm w-100 h-100 f column sbt" id='findProductsForm'>
                  <h4 className="flex sbt">

                     <div className="flex text-center w-100">
                        <h5 className='flex text-info'>Adicionar Produto</h5>
                        <MagnifyingGlass w='24' h='24' fill='var(--bs-info)' className='ml-1' />
                     </div>

                     <div id='closeFindProducts' className="flex">
                        <XMark w='24' h='24'
                           className=''
                           onClick={ close }
                        />
                     </div>
                  </h4>

                  <div className="inputForm f aic sbt p-1"> {/* Input Search */}
                     <div className="flex inputValue w-100">

                        <p className='text-primary'>
                           <input type="text" onChange={ returnProduct }
                              className='text-primary border pg3 text-center inputFindProduct'
                              id="findProduct" placeholder="Faça uma busca" />
                        </p>
                     </div>
                  </div>

                  <div className="tableFormList mt-1" id="tableFormList">
                     <table className="tableFindProduct text-center pg5 bold" id="tableFindProduct">
                        <thead className="text-color">
                           <tr className="">
                              <td>Nome</td>
                              <td>Preço</td>
                              <td>Tipo</td>
                              <td>Qtd</td>
                              <td>Add</td>
                           </tr>
                        </thead>

                        <tbody>
                           {
                              cloneProducts.map((prod) => {
                                 return (
                                    <tr key={prod.id}>
                                       <td>{prod.pdt_name}</td>
                                       <td>{prod.pdt_price}</td>
                                       <td>{prod.pdt_type}</td>
                                       <td>{prod.pdt_qty}</td>
                                       <td>
                                          <div className="flex">
                                             <span className="flex" onClick={ () => handleAddProduct(prod.id) }>
                                                <CartCirclePlus w='16' h='16' fill='var(--bs-success)' className='success-hover pointer' />
                                             </span>
                                             {/* </Link> */}
                                          </div>
                                       </td>
                                    </tr>
                                 )
                              })
                           }
                        </tbody>
                     </table>
                  </div>

                  <div className="flex btn btn-success mt-3" onClick={ close }>
                     Ok
                     <CircleCheck w='24' h='24' fill='var(--text)' className='ml-1' />
                  </div>

               </form>
            }
         </div>

      </article>
   )

}