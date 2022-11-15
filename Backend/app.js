// import JWT from 'jsonwebtoken'
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
   // res.send('Connected')
   const { newUserFullName } = req.body
   const { newUserLogin } = req.body
   const { newUserPassword } = req.body
   const { newUserAdmin } = req.body

   console.log(newUserFullName, newUserLogin, newUserPassword, newUserAdmin)

   let SQL = `INSERT INTO users (userName, userLogin, userPassword, userAdmin) VALUES (?, ?, ?, ?)`
   // ${newUserFullName}, ${newUserLogin}, ${newUserPassword}, ${newUserAdmin}
   
   db.query(SQL, [newUserFullName, newUserLogin, newUserPassword, newUserAdmin], async(err, result) => {
      if(err) {
         console.log({ msg: 'Erro ao cadastrar usuário' })
         console.log(err)
      } else {
         res.send({ msg: 'Usuário cadastrado com Sucesso', result })
      }
   })
})

app.listen(3001, console.log('Backend Running in Port 3001'))