import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import MoneyCheckPen from "../../assets/Icons/MoneyCheckPen";
import ArrowLeftLong from "../../assets/Icons/ArrowLeftLong";
import Registered from "../../assets/Icons/Registered";
import TrashCanXMark from "../../assets/Icons/TrashCanXMark";

export default function EditProduct() {
   const backend = 'http://localhost:3001'
   const navigate = useNavigate()

   const [product, setProduct] = useState([])
   let findProductInput = document.querySelector('#findProduct')

   useEffect(() => {
      axios.get(`${backend}/products`)
         .then(response => setProduct(response.data.result))
   }, [])

   let newProductName = document.querySelector('#newProductName')
   let newProductPrice = document.querySelector('#newProductPrice')
   let newProductType = document.querySelector('#newProductType')
   let newProductQty = document.querySelector('#newProductQty')

   async function getProduct() {
      await axios.get(`${backend}/product/${id}`)
         .then(response => {
            let pdt_name = response.data[0].pdt_name
            let pdt_price = response.data[0].pdt_price
            let pdt_type = response.data[0].pdt_type
            let pdt_qty = response.data[0].pdt_qtd

            newProductName.value = pdt_name
            newProductPrice.value = pdt_price
            newProductType.value = pdt_type
            newProductQty.value = pdt_qty
         })
         .catch(err => console.log(err))
   }

   async function updateProduc(id) {
      await axios.put(`${backend}/product/${id}`)
   }

   /*if (
      ((newProductName.value && newProductPrice.value && newProductType.value && newProductQty.value) !== '') &&
      ((newProductName.value && newProductPrice.value && newProductType.value && newProductQty.value) !== '0') &&
      ((newProductName.value && newProductPrice.value && newProductType.value && newProductQty.value) !== 0)) {


      const newRegister = axios.post(`${db}/registerNewProduct`, {
         // pdt_name, pdt_price, pdt_type, pdt_qty
         pdt_name: newProductName.value,
         pdt_price: newProductPrice.value,
         pdt_type: newProductType.value,
         pdt_qty: newProductQty.value
      })

      if (newRegister.status === 200) {
         alert(`
               Produto Cadastrado com Sucesso! 😎
               Nome do produto: ${newProductName.value}
               Preço do Produto: ${newProductPrice.value}
               Tipo do Produto: ${newProductType.value}
               Quatidade do Produto: ${newProductQty.value}
            `)
      } else {
         alert('Erro ao cadastrar')
      }

   } else {
      alert('Por obséquio, preencha todos os campos corretamente')
   }*/

   return (
      <>
         <main className="container flex">
            <div className="forms border">

               <section action='/' className="registerNewProducForm w-100 h-100 f column sbt">
                  <h4 className="flex">
                     Registro de Produto
                     <MoneyCheckPen w='25' h='25' fill='var(--bs-info)' className='ml-1' />
                  </h4>

                  <div className="inputForm">
                     <input type="text" name="newProductName" id="newProductName"
                        placeholder="Nome do produto"
                        required
                        onInvalid={e => e.target.setCustomValidity('Digite o nome do Produto')}
                        onInput={e => e.target.setCustomValidity('')} />
                  </div>

                  <div className="inputForm">
                     <input type="number" name="newProductPrice" id="newProductPrice"
                        placeholder="Preço"
                        required
                        onInvalid={e => e.target.setCustomValidity('Digite o preço do Produto')}
                        onInput={e => e.target.setCustomValidity('')}
                     />
                  </div>

                  <div className="inputForm">
                     <select name="newProductType" id="newProductType" className="" required>
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
                        required
                        onInvalid={e => e.target.setCustomValidity('Informe a quantidade do Produto')}
                        onInput={e => e.target.setCustomValidity('')} />
                  </div>

                  <button
                     id="btnRegisterNewProduct"
                     className="btnRegisterNewProduct btn btn-info"
                     // onClick={registerNewProduct}
                  >
                     Salvar Produto
                     <Registered w='24' h='24' fill='var(--bs-dark)' className='ml-1' />
                  </button>

                  <Link to='/' className="btn btn-warning" >
                     Voltar
                     <ArrowLeftLong w='24' h='24' fill='var(--bs-dark)' className='ml-1' />
                  </Link>
               </section>

            </div>
         </main>
      </>
   )
}
