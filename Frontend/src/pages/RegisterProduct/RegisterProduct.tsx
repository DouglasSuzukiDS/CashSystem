import axios from 'axios'

import { MoneyCheckPen } from "../../assets/Icons/MoneyCheckPen";
import { Registered } from "../../assets/Icons/Registered";
import { ActionsType } from "../../types/ActionsType";
import { XMark } from "../../assets/Icons/XMark";
import { CircleCheck } from "../../assets/Icons/CircleCheck";

export const RegisterProduct = ({ close }: ActionsType) => {

   const server: string = 'http://localhost:3001'

   const registerNewProduct = async () => {

      let newProductName = document.querySelector('#newProductName') as HTMLInputElement
      let newProductPrice = document.querySelector('#newProductPrice') as HTMLInputElement
      let newProductType = document.querySelector('#newProductType') as HTMLInputElement
      let newProductQty = document.querySelector('#newProductQty') as HTMLInputElement

      if (
         ((newProductName.value && newProductPrice.value && newProductType.value && newProductQty.value) !== '') &&
         ((newProductName.value && newProductPrice.value && newProductType.value && newProductQty.value) !== '0')
      ) {

         await axios.post(`${server}/registerNewProduct`, {
            pdt_name: newProductName.value,
            pdt_price: newProductPrice.value,
            pdt_type: newProductType.value,
            pdt_qty: newProductQty.value
         })
            .then(response => {
               if (response.status === 201) {
                  alert(`
                     ${response.data.msg} 😎
                     Nome do produto: ${newProductName.value}
                     Preço do Produto: ${newProductPrice.value}
                     Tipo do Produto: ${newProductType.value}
                     Quatidade do Produto: ${newProductQty.value}
                  `)

                  newProductName.value = ''
                  newProductPrice.value = ''
                  newProductType.value = ''
                  newProductQty.value = ''
               } else {
                  alert('Erro ao cadastrar')
               }
            })
            .catch(err => alert(err.response.data.msg))


      } else {
         alert('Por obséquio, preencha todos os campos corretamente')
      }
   }


   return (
      <main className="container flex z-index-50">
         <div className="forms border">

            <section className="registerNewProducForm w-100 h-100 f column sbt">
               <h4 className="flex sbt">
                  <div className="flex text-center w-100">
                     <h5>Registro de Produto</h5>
                     <MoneyCheckPen w='25' h='25' fill='var(--bs-info)' className='ml-1' />
                  </div>

                  <div id='closeNewProduct' className="flex">
                     <XMark w='24' h='24'
                        className=''
                        onClick={close}
                     />
                  </div>
               </h4>

               <div className="inputForm">
                  <input type="text" name="newProductName" id="newProductName"
                     placeholder="Nome do produto"
                     required
                     onInvalid={e => (e.target as HTMLInputElement).setCustomValidity('Digite o nome do Produto')}
                     onInput={e => (e.target as HTMLInputElement).setCustomValidity('')} />
               </div>

               <div className="inputForm">
                  <input type="number" name="newProductPrice" id="newProductPrice"
                     placeholder="Preço"
                     required
                     onInvalid={e => (e.target as HTMLInputElement).setCustomValidity('Digite o preço do Produto')}
                     onInput={e => (e.target as HTMLInputElement).setCustomValidity('')}
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
                     onInvalid={e => (e.target as HTMLInputElement).setCustomValidity('Informe a quantidade do Produto')}
                     onInput={e => (e.target as HTMLInputElement).setCustomValidity('')} />
               </div>

               <button
                  id="btnRegisterNewProduct"
                  className="btnRegisterNewProduct btn btn-info"
                  onClick={registerNewProduct}
               >
                  Registrar Produto
                  <Registered w='24' h='24' fill='var(--bs-dark)' className='ml-1' />
               </button>

               <button className="btn btn-success" onClick={close}>
                  Ok
                  <CircleCheck w='24' h='24' fill='var(--text)' className='ml-1' />
               </button>
            </section>

         </div>
      </main>
   )
}