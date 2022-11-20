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

app.post('/registerUser', async (req, res) => {
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


// Products
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

app.get('/products', async(req, res) => {
   let SQL = `SELECT * FROM products`

   db.query(SQL, (err, result) => {
      if(err) {
         console.log({ msg: 'Erro ao listar todos os produtos' })
      } else {
         res.status(200).send({ msg: 'Produtos cadastrados', result })
      }
   })
})
app.listen(3001, console.log('Backend Running in Port 3001'))