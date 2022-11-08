import { Link } from "react-router-dom";

import MoneyCheckPen from "../../assets/Icons/MoneyCheckPen";
import ArrowLeftLong from "../../assets/Icons/ArrowLeftLong";
import Registered from "../../assets/Icons/Registered";

function registerNewProduct() {
   let newProductName = document.querySelector('#newProductName').value
   let newProductPrice = document.querySelector('#newProductPrice').value
   let newProductType = document.querySelector('#newProductType').value
   let newProductQty = document.querySelector('#newProductQty').value

   if(
      ( (newProductName && newProductPrice && newProductType && newProductQty)  !== '') &&
      ( (newProductName && newProductPrice && newProductType && newProductQty)  !== '0') &&
      ( (newProductName && newProductPrice && newProductType && newProductQty)  !== 0) ) {
      alert(`
         Nome do produto: ${newProductName}
         Preço do Produto: ${newProductPrice}
         Tipo do Produto: ${newProductType}
         Quatidade do Produto: ${newProductQty}
      `)
   } else {
      alert('Por obséquio, preencha todos os campos corretamente')
   }
}

export default function RegisterProduct() {
   return(
      <main className="container flex">
      <div className="forms border">

         <form action='/' className="registerNewProducForm w-100 h-100 f column sbt">
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

            <button type='submit'
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
         </form>

      </div>
   </main>
   )
}
