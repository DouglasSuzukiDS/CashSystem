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

app.get('/', (req, res) => {
   // res.send('Connected')
   // const SQL = "INSERT INTO users (id, userName, userLogin, userPassword, userAdmin) VALUES (?, ?, ?, ?, ?), [DATAS]"
   
   // db.query(SQL, (err, result) => {
   //    console.log(err)
   // })
})

app.listen(3001, console.log('Backend Running in Port 3001'))