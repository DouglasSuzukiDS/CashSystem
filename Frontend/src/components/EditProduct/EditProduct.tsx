import axios from "axios";
import { useState, useEffect, useContext } from "react";

import { ActionsType } from "../../types/ActionsType";
import { ProductType } from "../../types/ProductType";

import { allProducts, findProductById }  from '../../services/product.service'

import { MoneyCheckPen } from "../../assets/Icons/MoneyCheckPen";
import { ArrowLeftLong } from "../../assets/Icons/ArrowLeftLong";
import { Registered } from "../../assets/Icons/Registered";
import { XMark } from "../../assets/Icons/XMark";
import { ProductsContext } from "../../context/Products/ProductsContext";

export const EditProduct = ({ close, id, listProducts }: ActionsType) => {
   const server: string = 'http://localhost:3001'
   
   const { products, setProducts } = useContext(ProductsContext)
   const [product, setProduct] = useState<ProductType>({
      id:  '',
      pdt_name: '',
      pdt_price: '',
      pdt_qty: '',
      pdt_type: ''
   })
      
   useEffect(() => {
      setProduct(products.filter(prodById => prodById.id === id)[0])
   }, [])

   useEffect(() => {
      getProduct()
      // console.log(product)
   }, [product])

   const [newProductName, setNewProductName] = useState('')
   const [newProductPrice, setNewProductPrice] = useState('')
   const [newProductType, setNewProductType] = useState('')
   const [newProductQty, setNewProductQty] = useState('')

   const getProduct = async() => { // Seta os campos com o dado do produto
      // console.log(product)

      setNewProductName(product.pdt_name)
      setNewProductPrice(product.pdt_price)
      setNewProductType(product.pdt_type)
      setNewProductQty(product.pdt_qty)
   }

   const updateProduct = async(id: string) => { // Atualiza o produto

      await axios.put(`${server}/edit/product/${id}`, {
         // pdt_name, pdt_price, pdt_type, pdt_qty
         pdt_name: newProductName,
         pdt_price: newProductPrice,
         pdt_type: newProductType,
         pdt_qty: newProductQty
      })
         .then(response => {
            if (
               ((newProductName && newProductPrice && newProductType && newProductQty) !== '') &&
               ((newProductName && newProductPrice && newProductType && newProductQty) !== '0')
            ) {

               if (response.status === 200) {
                  alert(`
                     ${response.data.msg} 😎
                     Nome do produto: ${newProductName}
                     Preço do Produto: ${newProductPrice}
                     Tipo do Produto: ${newProductType}
                     Quatidade do Produto: ${newProductQty}
                  `)

                  allProducts()
                     .then(setProducts)

                  if(close) {
                     close()
                  }

               } else if (response.status === 400) {
                  alert('Erro ao cadastrar')
               }

            } else {
               alert('Por obséquio, preencha todos os campos corretamente')
            }
         })
         // .catch(err => alert(err.response.data.msg))
         .catch(err => console.log(err.response.data.msg))
   }

   return (
      <section className="editProductForm w-100 h-100 f column sbt z-index-50">
         <h4 className="flex sbt">
            <div className="flex text-center w-100">
               Atualizar Produto
               <MoneyCheckPen w='25' h='25' fill='var(--bs-info)' className='ml-1' />
            </div>

            <div id='closeEditProduct' className="flex">
               <XMark w='24' h='24'
                  className=''
                  onClick={ close }
               />
            </div>
         </h4>

         <div className="inputForm">
            <input type="text" name="newProductName" id="newProductName"
               placeholder="Nome do produto"
               value={ newProductName }
               onChange={ e => setNewProductName(e.target.value) }
               required
               onInvalid={e => (e.target as HTMLInputElement).setCustomValidity('Digite o nome do Produto')}
               onInput={e => (e.target as HTMLInputElement).setCustomValidity('')} />
         </div>

         <div className="inputForm">
            <input type="number" name="newProductPrice" id="newProductPrice"
               placeholder="Preço"
               value={ newProductPrice }
               onChange={ e => setNewProductPrice(e.target.value) }
               required
               onInvalid={e => (e.target as HTMLInputElement).setCustomValidity('Digite o preço do Produto')}
               onInput={e => (e.target as HTMLInputElement).setCustomValidity('')}
            />
         </div>

         <div className="inputForm">
            <select name="newProductType" id="newProductType"
               value={ newProductType }
               onChange={ e => setNewProductType(e.target.value) }
               required>
               <option value="" className="withoutBg">Escolha o tipo</option>
               <option value="Comidas" className="withoutBg">Comidas</option>
               <option value="Bebibas" className="withoutBg">Bebidas</option>
               <option value="Cigarros" className="withoutBg">Cigarros</option>
               <option value="Diversos" className="withoutBg">Diversos</option>
            </select>
         </div>

         <div className="inputForm">
            <input type="number" name="newProductQty" id="newProductQty"
               placeholder="Quantidade"
               value={ newProductQty }
               onChange={ e => setNewProductQty(e.target.value) }
               required
               onInvalid={e => (e.target as HTMLInputElement).setCustomValidity('Informe a quantidade do Produto')}
               onInput={e => (e.target as HTMLInputElement).setCustomValidity('')} />
         </div>

         <button
            id="btnRegisterNewProduct"
            className="btnRegisterNewProduct btn btn-info"
            onClick={() => updateProduct(`${id}`)}
         >
            Atualizar Produto
            <Registered w='24' h='24' fill='var(--bs-dark)' className='ml-1' />
         </button>

         <button className="btn btn-warning" onClick={ close } >
            Voltar
            <ArrowLeftLong w='24' h='24' fill='var(--bs-dark)' className='ml-1' />
         </button>
      </section>
   )
}