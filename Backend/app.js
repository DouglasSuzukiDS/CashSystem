const JWT = require('jsonwebtoken')

const express = require('express')
const cors = require('cors')
const mysql = require('mysql2')
const app = express()

require('dotenv').config()

// Connection with DB
const db = mysql.createPool({
   host: process.env.DB_HOST,
   user: process.env.DB_USER,
   password: process.env.DB_PASSWORD,
   database: process.env.DB_DATABASE
})

app.use(express.json())
app.use(cors())

// Users
app.get('/users', async(req, res) => {
   let SQL = `SELECT * FROM users`

   db.query(SQL, (err, result) => {
      if(err) {
         console.log({ msg: 'Erro ao listar todos os colaboradores' })
      } else {
         res.status(200).send({ msg: 'Colaboradores encontrados', result })
      }
   })
})

app.get('/user/:id', async(req, res) => {
   const { id } = req.params

   let SQL = 'SELECT * FROM users WHERE id = ?'

   db.query(SQL, [id], (err, result) => {
      if(err) {
         console.log('Erro ao tentar localizar o colaborador')
         res.send('Erro ao tentar localizar o colaborar')
      } else if(result.length > 0) {
         res.send(result)
      } else {
         console.log('Colaborador não localizado')
         res.status(200).send('Colaborador não localizado')
      }
   })
})

app.post('/login', async(req, res) => {

   const { userLogin, userPassword } = req.body
   // console.log(`User => ${userLogin}, Senha => ${userPassword}`)

   let findUser = `SELECT * FROM users WHERE (userLogin, userPassword) = (?, ?)`

   db.query(findUser, [userLogin, userPassword], async(err, result) => {
      console.log(result) // Return User

      if(result.length > 0) {
         const token = JWT.sign(
            { userLogin: userLogin, userPassword: userPassword}, // Identificação
            process.env.TOKEN,
            { expiresIn: '2h' } // Tempo de expiração
         )
         console.log(token)
         res.status(200).json({ msg: `Logado como ${userLogin}`})

         // res.json({ status: true, token });
      } else {
         console.log({ msg: 'Ocorreu um erro' })
         res.status(400).json({ msg: 'Erro ao logar' })
      }
   })

})

app.post('/registerNewUser', async (req, res) => {
   // res.send('Connected')
   const { newUserFullName, newUserLogin, newUserPassword, newUserAdmin } = req.body

   let checkIfUserExist = `SELECT * FROM users WHERE userLogin = (?)`

   console.log(newUserFullName, newUserLogin, newUserPassword, newUserAdmin)

   db.query(checkIfUserExist, [newUserLogin] ,async(err, result) => {
      if(result.length > 0) {
         console.log(result)
         console.log('Login de usuário já existe')
         res.status(200).send({ msg: 'Login de Colaborador já existe' })
      } else {
         console.log('Pode seguir')

         let SQL = `INSERT INTO users (userName, userLogin, userPassword, userAdmin) VALUES (?, ?, ?, ?)`
         // ${newUserFullName}, ${newUserLogin}, ${newUserPassword}, ${newUserAdmin}
            
         db.query(SQL, [newUserFullName, newUserLogin, newUserPassword, newUserAdmin], async (err, result) => {
            if (err) {
               console.log({ msg: 'Erro ao cadastrar usuário' })
               console.log(err)
            } else {
               res.status(200).send({ msg: 'Usuário cadastrado com Sucesso', result })
            }
         })
      }
   })
})

app.put('/edit/user/:id', (req, res) => {
   const { newUserName, newUserLogin, newUserPassword, newUserAdmin } = req.body
   const { id } = req.params

   console.log(newUserName, newUserLogin, newUserPassword, newUserAdmin)

   let SQL = 'UPDATE users SET userName = ?, userLogin = ?, userPassword = ?, userAdmin = ? WHERE id = ?'

   db.query(SQL, [ newUserName, newUserLogin, newUserPassword, newUserAdmin, id ], async(err, result) => {
      if(err) {
         console.log('Erro ao editar as informações do colaborador')
         console.log(err)
      } else {
         res.status(200).send({msg: 'Cadastro do colaborador atualizado com Sucesso', result})
      }

   })
})

app.delete('/delete/user/:id', async(req, res) => {
   const { id } = req.params

   let SQL = 'DELETE FROM users WHERE id = ?'

   db.query(SQL, [ id ], (err, result) => {
      if(err) {
         console.log({ msg: 'Erro ao deletar colaborador do sistema' })
      } else {
         console.log({ msg: 'Colaborador removido do sistema com sucesso' })
         res.status(200).send({ msg: 'Colaborador removido do sistema com sucesso' })
      }
   })
})

// Products
app.get('/products', async(req, res) => {
   let SQL = `SELECT * FROM products`

   db.query(SQL, (err, result) => {
      if(err) {
         console.log({ msg: 'Erro ao listar todos os produtos' })
         console.log(err)
      } else {
         res.status(200).send({ msg: 'Produtos cadastrados', result })
      }
   })
})

app.get('/product/:id', async(req, res) => {
   const { id } = req.params

   let SQL = 'SELECT * FROM products WHERE id = ?'

   db.query(SQL, [id], (err, result) => {
      if(err) {
         console.log('Erro ao localizar o produto')
      } else if(result.length > 0) {
         res.send(result)
      } else {
         console.log('Produto não encontrado')
         res.status(200).send('Produto não encontrado')
      }
   })
})

app.get('/products/type/', async(req, res) => {
   const { pdt_type } = req.body

   let SQLType = 'SELECT * FROM products WHERE pdt_type = ?'
   let SQLName = 'SELECT * FROM products WHERE pdt_name = ?'

   db.query(SQLType, [ pdt_type ], (err, result) => {
      if(err) {
         console.log('Erro ao localizar o produto')
      } else if(result.length > 0) {
         res.status(200).send({ msg: 'Produtos localizados com a busca', result })
      }
   })
})

app.post('/registerNewProduct', async(req, res) => {
   const { pdt_name, pdt_price, pdt_type, pdt_qty } = req.body
   console.log(pdt_name, pdt_price, pdt_type, pdt_qty)

   let SQL = `INSERT INTO products (pdt_name, pdt_price, pdt_type, pdt_qty) VALUES (?, ?, ?, ?)`

   db.query(SQL, [pdt_name, pdt_price, pdt_type, pdt_qty], async(err, result) => {
      if(err) {
         console.log({ msg: 'Erro ao cadastrar o produto' })
         res.status(400).json({msg: 'Erro ao cadastrar'})
         console.log(err)
      } else {
         res.status(200).send(result)
      }
   })
})

app.put('/edit/product/:id', async(req, res) => {
   const { pdt_name, pdt_price, pdt_type, pdt_qty } = req.body
   const { id } = req.params
    
   let SQL = "UPDATE products SET pdt_name = ?, pdt_price = ?, pdt_type = ?, pdt_qty = ? WHERE id = ?"

   db.query(SQL, [pdt_name, pdt_price, pdt_type, pdt_qty, id], async(err, result) => {
      if(err) {
         console.log({msg: 'Erro ao Editar o produto'})
         res.status(400).send({msg: 'Erro ao editar o produto'})
         console.log(err)
      } else {
         res.status(200).send({msg: 'Produto Atualizado com Sucesso', result})
      }
   })
   console.log(`Produto Editado: Nome: ${pdt_name}, Preço: ${pdt_price}, Tipo: ${pdt_type}, Quantidade: ${pdt_qty}`)
})

app.delete('/delete/product/:id', async(req, res) => {
   const { id } = req.params

   let SQL = 'DELETE FROM products WHERE id = ?'

   db.query(SQL, [id], async(err, result) => {
      if(err) {
         console.log({msg: 'Erro ao deletar produto'})
      } else { 
         console.log({msg: 'Produto deletado com Sucesso'})
         res.status(200).send({msg: 'Produto deletado com Sucesso'})
      }
   })
})

app.listen(3001, console.log('Backend Running in Port 3001'))