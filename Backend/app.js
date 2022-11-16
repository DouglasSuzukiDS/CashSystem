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

app.post('/login', async(req, res) => {
   const { userLogin, userPassword } = req.body
   let SQL = `SELECT * FROM users WHERE (userLogin, userPassword) = (?, ?)`
   console.log(SQL)
   db.query(SQL, [userLogin, userPassword], async(err, result) => {
      if(result.length > 0) {
         res.status(200).send({ msg: `Logado como ${userLogin}` })

         const token = JWT.sign(
            { userLogin: userLogin, userPassword: userPassword}, // Identificação
            process.env.TOKEN,
            { expiresIn: '2h' } // Tempo de expiração
         )

         res.json({ status: true, token });
      } else {
         res.status(404).send({ msg: 'Erro ao logar' })
         console.log({ msg: 'Ocoreeu um erro' })
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

// console.log(newUserFullName, newUserLogin, newUserPassword, newUserAdmin)

/*let SQL = `INSERT INTO users (userName, userLogin, userPassword, userAdmin) VALUES (?, ?, ?, ?)`
// ${newUserFullName}, ${newUserLogin}, ${newUserPassword}, ${newUserAdmin}
 
db.query(SQL, [newUserFullName, newUserLogin, newUserPassword, newUserAdmin], async(err, result) => {
   if(err) {
      console.log({ msg: 'Erro ao cadastrar usuário' })
      console.log(err)
   } else {
      res.send({ msg: 'Usuário cadastrado com Sucesso', result })
   }
})*/

app.listen(3001, console.log('Backend Running in Port 3001'))