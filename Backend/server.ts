import express from 'express'
import cors from 'cors'
import mysql from 'mysql2'
import fs from 'fs'

import bcrypt from 'bcrypt'

const JTW = require('jsonwebtoken')

import dotenv from 'dotenv'
dotenv.config()

// Connection with DB
const db = mysql.createPool({
   host: process.env.DB_HOST,
   user: process.env.DB_USER,
   password: process.env.DB_PASSWORD,
   database: process.env.DB_DATABASE
})

const server = express()

server.use(cors())
server.use(express.json())
server.use(express.urlencoded( { extended: true } ))

// Users
server.get('/backupUsers', async(req, res) => {
   let SQL: string = `SELECT * FROM users`

   const day: number = new Date().getDay()
   const mouth: number = new Date().getMonth()
   const year: number = new Date().getFullYear()

   const hour: number = new Date().getHours()
   const minutes: number = new Date().getMinutes()
   const seconds: number = new Date().getSeconds()

   const today: string = `${day}-${mouth + 1}-${year}`
   const hours: string = `${hour}-${minutes}-${seconds}-`
   const dateNow: string = `${today}-${hours}`

   db.query(SQL, (err, result) => {
      if(err) {
         console.log({ msg: 'Erro ao listar todos os usuários' })
         console.log(err)
      } else {
         // Escreve o arquivo
         // writeFile('PATH', CONTEUDO, CALLBACK)
         fs.writeFile(`backup/backupUsers/${dateNow}users.json`, JSON.stringify(result), (err) => {
            if(err) {
               console.log(err)
            } else {
               console.log('Backup de usuários salvo com Sucesso!')

               // readFile('PATH', CONTEUDO, CALLBACK) => Faz a leitura do arquivo
               fs.readFile(`backup/backupUsers/${dateNow}users.json`, (err, data) => {
                  err ? console.log(err) : console.log('Usuários: ' + data)
               })
            }
         })

         res.status(200).send({ msg: 'Backup Realizado', result })
      }
   })
})

server.get('/users', async(req, res) => {
   let SQL: string = `SELECT * FROM users`

   db.query(SQL, (err, result) => {
      if(err) {
         console.log(err)
         res.status(404).send({ msg: 'Erro ao listar todos os colaboradores' })
      } else {
         res.status(200).send({ msg: 'Colaboradores encontrados', result })
      }
   })
})

server.get('/user/:id', async(req, res) => { // Error
   const { id } = req.params

   let SQL: string = 'SELECT * FROM users WHERE id = ?'

   db.query(SQL, [id], (err, result) => {
      if(err) {
         res.status(404).send({ msg: 'Erro ao tentar localizar o colaborar'})
      } else if( JSON.parse( JSON.stringify(result) ).length > 0 ) {
            // Parse => Tranforma em um OBJ
            // Stringfy => Transforma em String
         res.status(200).send({ msg: 'Colaborador localizado', result })
      } else {
         res.status(400).send({ msg: 'Colaborador não encontrado'})
      }
   })
})

server.post('/login', async(req, res) => { // Error

   const { userLogin, userPassword } = req.body
   // console.log(`User => ${userLogin}, Senha => ${userPassword}`)

   let findUser: string = `SELECT * FROM users WHERE (userLogin, userPassword) = (?, ?)`

   const password = bcrypt.compareSync(userPassword, findUser)

   db.query(findUser, [userLogin, password], async(err, result) => {
      // console.log(result) // Return User

      if(err) {
         console.log({ msg: 'Ocorreu um erro' })
         res.status(404).json({ msg: 'Erro ao logar' })

      } else if( JSON.parse(JSON.stringify(result)).length > 0 ) {
         const token = JTW.sign(
            { userLogin: userLogin, userPassword: userPassword}, // Identificação
            process.env.SECRET,
            { expiresIn: '2h' } // Tempo de expiração
         )
         //console.log(token)
         //let user = JSON.parse(JSON.stringify(result))
         // let user = JSON.stringify(result)
         // console.log(user)
         /*let user = {
            id: data[0].id,
            userName: data[0].userName,
            userLogin: data[0].userLogin,
            userPassword: data[0].userPassword,
            userAdmin: data[0].userPassword
         }*/
         // console.log(user)

         let user = Object.values(result)
         console.log(typeof user[0])
         console.log(user[0])
         // res.status(200).json({ msg: `Logado como: ${userLogin}`, token: `Token: ${token}`, result: `${user}`})
         res.status(200).send({ msg: `Logado como: ${userLogin}`, token: `${token}`, user: `${JSON.stringify(user[0])}`})

         // res.json({ status: true, token })
      } else {
         //console.log({ msg: 'Dados incorretos ou não localizados' })
         res.status(404).send({ msg: 'Dados incorretos ou não localizados.' })
      }
   })

})

server.post('/registerNewUser', async (req, res) => { // Error
   // res.send('Connected')
   const { newUserFullName, newUserLogin, newUserPassword, newUserAdmin } = req.body

   let checkIfUserExist = `SELECT * FROM users WHERE userLogin = (?)`

   console.log(newUserFullName, newUserLogin, newUserPassword, newUserAdmin)

   db.query(checkIfUserExist, [newUserLogin] ,async(err, result) => {
      if(err) {
         res.status(404).send('Erro, por favor tente mais tarde')
         
      } else if( JSON.parse( JSON.stringify(result) ).length > 0 ) { // Verifica se o login de colaborar já existe no sistema
         console.log(result)
         res.status(400).send({ msg: 'Login de Colaborador já existe' })

      } else {
         console.log('Pode seguir')

         let SQL = `INSERT INTO users (userName, userLogin, userPassword, userAdmin) VALUES (?, ?, ?, ?)`
         // ${newUserFullName}, ${newUserLogin}, ${newUserPassword}, ${newUserAdmin}

         
         const newUserPasswordHash = bcrypt.hashSync(newUserPassword, 10)
         // console.log(newUserPasswordHash)
            
         db.query(SQL, [newUserFullName, newUserLogin, newUserPasswordHash, newUserAdmin], async (err, result) => {
            if (err) {
               console.log(err)
               res.status(400).send({ msg: 'Erro ao cadastrar usuário' })
            } else {
               res.status(201).send({ msg: 'Usuário cadastrado com Sucesso.'})
            }
         })
      }
   })
})

server.put('/edit/user/:id', (req, res) => {
   const { newUserName, newUserLogin, newUserPassword, newUserAdmin } = req.body
   const { id } = req.params

   console.log(newUserName, newUserLogin, newUserPassword, newUserAdmin)

   let checkIfUserExist: string = `SELECT * FROM users WHERE id = (?)`
   let checkIfProductExistWithThisUserLogin: string = `SELECT * FROM users WHERE userLogin = (?)`

   db.query(checkIfUserExist, [id], async(err, result) => {
      if(err) {
         console.log(err)
         res.status(404).send({ msg: 'Erro ao tentar fazer a edição dos dados do colaborador, por obséquio tente mais tarde.' })

      } else if( JSON.parse( JSON.stringify(result) ).length < 1 ) { // Verifica se não existe um usuário com esse ID
         res.status(400).send({ msg: 'Não foi possível atualizar os dados do colaborador' })

      } else {
         db.query(checkIfProductExistWithThisUserLogin, [newUserLogin], (err, result) => {
            if( JSON.parse( JSON.stringify(result) ).length > 1 ) {
               res.status(400).send({ msg: 'Esse login escolhido está indisponível no momento' })

            } else {
               let SQL: string = 'UPDATE users SET userName = ?, userLogin = ?, userPassword = ?, userAdmin = ? WHERE id = ?'

               const newUserPasswordHash = bcrypt.hashSync(newUserPassword, 10)
            
               db.query(SQL, [ newUserName, newUserLogin, newUserPasswordHash, newUserAdmin, id ], async(err, result) => {
                  if(err) {
                     console.log(err)
                     res.status(404).send({ msg: 'Erro ao editar os dados do colaborador. O login de colaborador pode já existir no sistema.' })
                  } else {
                     res.status(200).send({msg: 'Cadastro do colaborador atualizado com Sucesso.'})
                  }
            
               })
            }
         })

      }
   })

})

server.delete('/delete/user/:id', async(req, res) => {
   const { id } = req.params
   
   let checkIfUserExist: string = `SELECT * from users WHERE id = (?)`

   db.query(checkIfUserExist, [id], async(err, result) => {
      if(err) {
         console.log(err)
         res.status(404).send({ msg: 'Erro ao deletar colaborador do sistema, por favor tente mais tarde.' })

      } else if( JSON.parse( JSON.stringify(result) ).length < 1 ) {
         res.status(400).send({ msg: 'Não foi possível excluir o cadastro desse colaborador. O cadastro pode não existir.' })

      } else {
         let SQL: string = 'DELETE FROM users WHERE id = ?'
         
         db.query(SQL, [ id ], (err, result) => {
            if(err) {
               console.log(err)
               res.status(404).send({ msg: 'Erro ao deletar o colaborador do sistema.' })
      
            } else {
               res.status(200).send({ msg: 'Colaborador removido do sistema com sucesso' })
            }
         })
      }
   })

})

// Products
server.get('/backupProducts', async(req, res) => {
   let SQL: string = `SELECT * FROM products`

   const day: number = new Date().getDay()
   const mouth: number = new Date().getMonth()
   const year: number = new Date().getFullYear()

   const hour: number = new Date().getHours()
   const minutes: number = new Date().getMinutes()
   const seconds: number = new Date().getSeconds()

   const today: string = `${day}-${mouth + 1}-${year}`
   const hours: string = `${hour}-${minutes}-${seconds}-`
   const dateNow: string = `${today}-${hours}`

   db.query(SQL, (err, result) => {
      if(err) {
         console.log({ msg: 'Erro ao listar todos os produtos' })
         console.log(err)
      } else {

         // writeFile('PATH', CONTEUDO, CALLBACK) => 
         fs.writeFile(`backup/backupProducts/${dateNow}products.json`, JSON.stringify(result), (err) => {
            if(err) {
               console.log(err)
            } else {
               console.log('Backup de produtos salvo com Sucesso!')

               fs.readFile(`backup/backupProducts/${dateNow}products.json`, (err, data) => {
                  err ? console.log(err) : console.log('Produtos: ' + data)
               })
            }
         })

         res.status(200).send({ msg: 'Backup Realizado', result })
      }
   })
})

server.get('/products', async(req, res) => {
   let SQL: string = `SELECT * FROM products`

   db.query(SQL, (err, result) => {
      if(err) {
         console.log(err)
         res.status(404).send({ msg: 'Erro ao listar todos os produtos' })
      } else {
         res.status(200).send({ msg: 'Produtos cadastrados', result })
      }
   })
})

server.get('/product/:id', async(req, res) => { // Error
   const { id } = req.params

   let SQL: string = 'SELECT * FROM products WHERE id = ?'

   db.query(SQL, [id], (err, result) => {
      if(err) {
         console.log(err)
         res.status(404).send({ msg: 'Erro ao localizar o produto'})
      } else if( JSON.parse( JSON.stringify(result) ).length > 0 ) {
         res.status(200).send({ msg: 'Produto localizado', result })
      } else {
         res.status(400).send({msg: 'Produto não localizado'})
      }
   })
})

server.get('/products/type/', async(req, res) => { // Error
   const { pdt_type } = req.body 

   let SQLType: string = 'SELECT * FROM products WHERE pdt_type = ?'
   let SQLName: string = 'SELECT * FROM products WHERE pdt_name = ?'

   db.query(SQLType, [ pdt_type ], (err, result) => {
      if(err) {
         res.status(404).send({ msg: 'Erro ao localizar os produtos desse tipo. Por obséquio, faça a busca mais tarde.' })
      } else if( JSON.parse( JSON.stringify(result) ).length > 0 ) {
         res.status(200).send({ msg: 'Produtos localizados com a busca', result })
      } else {
         res.status(400).send({ msg: 'Erro em localizar os produtos desse tipo.' })
      }
   })
})

server.post('/registerNewProduct', async(req, res) => {
   const { pdt_name, pdt_price, pdt_type, pdt_qty } = req.body
   console.log(pdt_name, pdt_price, pdt_type, pdt_qty)

   let checkIfProductExist: string = `SELECT * FROM products WHERE pdt_name = (?)`

   db.query(checkIfProductExist, [pdt_name], async(err, result) => {
      if(err) {
         res.status(404).send({ msg: 'Erro, por obséquio tente mais tarde.' })
         
      } else if( JSON.parse( JSON.stringify(result) ).length > 0 ) { // Verifica se o produto já existe no sistema
         console.log(result)
         res.status(400).send({ msg: 'Esse produto já existe no sistema.' })
         
      } else {
         let SQL: string = `INSERT INTO products (pdt_name, pdt_price, pdt_type, pdt_qty) VALUES (?, ?, ?, ?)`

         db.query(SQL, [pdt_name, pdt_price, pdt_type, pdt_qty], async(err, result) => {
            if(err) {
               // res.status(400).json({msg: 'Erro ao cadastrar'})
               console.log(err)
               res.status(404).send({ msg: 'Erro ao cadastrar o produto.' })
            } else {
               res.status(201).send({ msg: 'Produto cadastrado com Sucesso.'})
            }
         })

      }
   })

})

server.put('/edit/product/:id', async(req, res) => {
   const { pdt_name, pdt_price, pdt_type, pdt_qty } = req.body
   const { id } = req.params

   let checkIfProductExist: string = `SELECT * FROM products WHERE id = (?)`
   let checkIfProductExistWithThisName: string = `SELECT * FROM products WHERE pdt_name = (?)`

   db.query(checkIfProductExist, [id], async(err, result) => {
      if(err) {
         console.log(err)
         res.status(404).send({ msg: 'Erro ao tentar fazer a edição dos dados do produto, por obséquio tente mais tarde.' })

      } else if( JSON.parse( JSON.stringify(result) ).length < 1 ) { // Verifica se o produto não existe com esse ID
         res.status(400).send({ msg: 'Não foi possível atualizar os dados do produto' })

      } else {
         db.query(checkIfProductExistWithThisName, [pdt_name], (err, result) => { // Verifica se existe outro produto com o mesmo nome. 
            if( JSON.parse( JSON.stringify(result) ).length > 1 ) { // Se tiver 1 se informa que já existe um produto com ese nome 
               res.status(400).send({ msg: 'Esse produto já existe no sistema.' })

            } else {
               let SQL: string = "UPDATE products SET pdt_name = ?, pdt_price = ?, pdt_type = ?, pdt_qty = ? WHERE id = ?"
            
               db.query(SQL, [pdt_name, pdt_price, pdt_type, pdt_qty, id], async(err, result) => {
                  if(err) {
                     console.log(err)
                     res.status(404).send({msg: 'Erro ao editar o produto. O nome do produto pode já existir no sistema'})
                  } else {
                     res.status(200).send({msg: `Produto atualizado com Sucesso. Nome: ${pdt_name}, Preço: ${pdt_price}, Tipo: ${pdt_type}, Quantidade: ${pdt_qty}`})
                  }
               })
            }
         })

      }
   })
    
})

server.delete('/delete/product/:id', async(req, res) => {
   const { id } = req.params

   let checkIfProductExist = `SELECT * FROM products WHERE id = (?)`

   db.query(checkIfProductExist, [id], async(err, result) => {
      if(err) { 
         res.status(404).send({ msg: 'Erro ao tentar excluir o produto. Por obséquio tente mais tarde' })

      } else if( JSON.parse( JSON.stringify(result) ).length < 1 ) { // Verifica se esse produto existe pelo ID
         res.status(400).send({ msg: 'Não foi possível excluir esse produto. Ele pode não existir.' })

      } else {
         let SQL: string = 'DELETE FROM products WHERE id = ?'
      
         db.query(SQL, [id], async(err, result) => {
            if(err) {
               res.status(404).send({ msg: 'Erro ao deletar o produto do sistema.' })
            } else { 
               res.status(200).send({ msg: 'Produto deletado com Sucesso' })
            }
         })
      }
   })
      

})

// Add Product
server.get('/cartlist', (req, res) => {
   let SQL: string = 'SELECT * FROM cartlist'

   db.query(SQL, async(err, result) => {
      if(err) {
         res.status(404).send({ msg: 'Erro ao listar os produtos na lists' })
      } else {
         res.status(200).send({ msg: 'Produtos no carrinho', result })
      }
   }) 
})

server.post('/cartlist', (req, res) => {
   const { pdt_name, pdt_price, pdt_type, pdt_qty, pdt_value } = req.body
   console.log(pdt_name, pdt_price, pdt_type, pdt_qty, pdt_value)

   let checkIfProductExistInList: string = `SELECT * FROM cartlist WHERE pdt_name = (?)`

   db.query(checkIfProductExistInList, [pdt_name], async(err, result) => {
      if(err) {
         res.status(400).send({ msg: 'Produto já se encontra na lista' })
      } else {
         let SQL: string = `INSERT INTO cartlist (pdt_name, pdt_price, pdt_type, pdt_qty, pdt_value) VALUES (?,?,?,?,?)`

         db.query(SQL, [pdt_name, pdt_price, pdt_type, pdt_qty, pdt_value], async(err, result) => {
            if(err) {
               console.log(err)
               res.status(400).send({ msg: 'Erro ao adicionar o produto na lista' })
            } else {
               res.status(201).send({ msg: 'Produto adicionado na lista' })
            }
         })
      }
   })
})

server.delete('/deleteCart', async(req, res) => {
   let SQL: string = 'DELETE FROM cartlist'

   db.query(SQL, async(err, result) => {
      if(err) {
         res.status(404).send({ msg: 'Erro ao limpar o carrinho' })
      } else {
         res.status(200).send({ msg: 'Carrinho limpo com sucesso' })
      }
   })
})

server.listen('3001', () => console.log('Backend Running in port 3001'))