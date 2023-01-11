import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'

import MoneyCheckPen from "../../assets/Icons/MoneyCheckPen";
import ArrowLeftLong from "../../assets/Icons/ArrowLeftLong";
import Registered from "../../assets/Icons/Registered";

export default function RegisterProduct() {
   
   const server: string = 'http://localhost:3001'
   const navigate = useNavigate()

   async function registerNewProduct() {

      let newProductName = document.querySelector('#newProductName') as HTMLInputElement
      let newProductPrice = document.querySelector('#newProductPrice') as HTMLInputElement
      let newProductType = document.querySelector('#newProductType') as HTMLInputElement
      let newProductQty = document.querySelector('#newProductQty') as HTMLInputElement
   
      if(
         ( (newProductName.value && newProductPrice.value && newProductType.value && newProductQty.value)  !== '')  &&
         ( (newProductName.value && newProductPrice.value && newProductType.value && newProductQty.value)  !== '0')
         // ( (newProductName.value && newProductPrice.value && newProductType.value && newProductQty.value)  !== 0) 
      ) {
         
         const newRegister = await axios.post(`${server}/registerNewProduct`, {
            // pdt_name, pdt_price, pdt_type, pdt_qty
            pdt_name: newProductName.value,
            pdt_price: newProductPrice.value,
            pdt_type: newProductType.value,
            pdt_qty: newProductQty.value
         })
            .then(response => {
               if(response.status === 201) {
                  alert(`
                     ${response.data.msg} 😎
                     Nome do produto: ${newProductName.value}
                     Preço do Produto: ${newProductPrice.value}
                     Tipo do Produto: ${newProductType.value}
                     Quatidade do Produto: ${newProductQty.value}
                  `)
               } else {
                  alert('Erro ao cadastrar')
               }
            })
            .catch(err => alert(err.response.data.msg))
         

      } else {
         alert('Por obséquio, preencha todos os campos corretamente')
      }
   }


   return(
      <main className="container flex">
      <div className="forms border">

         <section className="registerNewProducForm w-100 h-100 f column sbt">
            <h4 className="flex">
               Registro de Produto 
               <MoneyCheckPen w='25' h='25' fill='var(--bs-info)' className='ml-1' />
            </h4>

            <div className="inputForm">
               <input type="text" name="newProductName" id="newProductName"
                  placeholder="Nome do produto"
                  required
                  onInvalid={e => (e.target  as HTMLInputElement).setCustomValidity('Digite o nome do Produto')}
                  onInput={e => (e.target  as HTMLInputElement).setCustomValidity('')} />
            </div>

            <div className="inputForm">
               <input type="number" name="newProductPrice" id="newProductPrice"
                  placeholder="Preço"
                  required
                  onInvalid={e => (e.target  as HTMLInputElement).setCustomValidity('Digite o preço do Produto')}
                  onInput={e => (e.target  as HTMLInputElement).setCustomValidity('')} 
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
                  onInvalid={e => (e.target  as HTMLInputElement).setCustomValidity('Informe a quantidade do Produto')}
                  onInput={e => (e.target  as HTMLInputElement).setCustomValidity('')} />
            </div>

            <button 
               id="btnRegisterNewProduct"
               className="btnRegisterNewProduct btn btn-info"
               onClick={ registerNewProduct } 
               >
               Registrar Produto
               <Registered w='24' h='24' fill='var(--bs-dark)' className='ml-1' />
            </button> 

            <Link to='/' className="btn btn-warning" >
               Voltar
               <ArrowLeftLong w='24' h='24' fill='var(--bs-dark)' className='ml-1' />
            </Link>
         </section>

      </div>
   </main>
   )
}
