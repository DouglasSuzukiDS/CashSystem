import { useEffect, useState } from "react"
import axios from "axios"

import CircleCheck from "../../assets/Icons/CircleCheck"
import MagnifyingGlass from "../../assets/Icons/MagnifyingGlass"
import XMark from "../../assets/Icons/XMark"
import PenToSquare from "../../assets/Icons/PenToSquare"
import TrashCanXMark from "../../assets/Icons/TrashCanXMark"
import { Link } from "react-router-dom"

export default function FindProducts(props) {
   const backend = 'http://localhost:3001'

   // Get All Users
   const [users, setUsers] = useState([])
   const [find, setFind] = useState([])

   useEffect(() => {
      axios.get(`${backend}/users`)
         .then(response => setUsers(response.data.result))
   }, [])
   //console.log(users)

   // Get All Products
   const [products, setProducts] = useState([])

   useEffect(() => {
      axios.get(`${backend}/products`)
         .then(response => setProducts(response.data.result))
   }, [])

    useEffect(() => {
      // let findProductInput = document.querySelector('#findProduct')
      axios.get(`${backend}/products/type`)
         .then(response => setFind(response.data.result))
         // console.log(findProductInput.value + ' no console')
         // console.log(find)
   }, [])

   // Delete Product
   const deleteProduct = (id) => {
      axios.delete(`${backend}/delete/product/${id}`)
         .then(alert('Produto deletado com Sucesso'))
         .then(console.log(`ID Excluido: ${id}`))

      return setProducts(products.filter(prod => prod.id !== id))
   }

   const returnProduct = async(e) => {
      let findProduct = document.querySelector('#findProduct').value
      // console.log(findProduct.value)
      
      
   }

   return (
      <>
         <main className="flex" id='FindProductModal'>

            <div className="forms">

               <form action='/' className="formsFindProducts w-100 h-100 f column sbt" id='formsFindProducts'>
                  <h4 className="f sbt pb-2">

                     <div className="flex text-center">
                        <h5 className='flex text-info'>Pesquise um Produto</h5>
                        <MagnifyingGlass w='24' h='24' fill='var(--bs-info)' className='ml-1' />
                     </div>

                     <div id='closeFindProducts' onClick={props.close}>
                        <XMark w='24' h='24'
                           className=''
                        />
                     </div>
                  </h4>

                  <div className="inputForm f aic sbt p-1"> {/* Abertura */}
                     <div className="flex inputValue w-100">

                        <p className='text-primary'>
                           <input type="text" onChange={ returnProduct } 
                              className='text-primary border pg3 text-center inputFindProduct'
                              id="findProduct" placeholder="Faça uma busca" />
                        </p>
                     </div>
                  </div>

                  <div className="tableFormList" id="tableFormList">
                     <table className="tableFindProduct text-center pg5 bold" id="tableFindProduct">
                        <thead className="none">
                           <tr className="">
                              <td>Nome</td>
                              <td>Preço</td>
                              <td>Tipo</td>
                              <td>Quandidade</td>
                              <td>Ação</td>
                           </tr>
                        </thead>

                        <tbody>
                           {
                              products.map((prod) => {
                                 return (
                                    <tr key={prod.id}>
                                       <td>{prod.pdt_name}</td>
                                       <td>{prod.pdt_price}</td>
                                       <td>{prod.pdt_type}</td>
                                       <td>{prod.pdt_qty}</td>
                                       <td>
                                          <div className="flex text-center">
                                             <Link to={ `/edit/product/${prod.id}` } >
                                                <PenToSquare w='16' h='16' fill='var(--bs-warning)' className='warning-hover' />
                                             </Link>

                                             <Link to='/findproducts' onClick={ () =>  deleteProduct(prod.id) }>
                                                <TrashCanXMark w='16' h='16' fill='var(--bs-danger)' className='danger-hover' />
                                             </Link>
                                          </div>
                                       </td>
                                    </tr>
                                 )
                              })
                           }
                        </tbody>
                     </table>
                  </div>

                  <div className="flex btn btn-success mt-3" onClick={ props.close }>
                     Confirmar
                     <CircleCheck w='24' h='24' fill='var(--text)' className='ml-1' />
                  </div>

               </form>
            </div>
         </main>


      </>


   )

}