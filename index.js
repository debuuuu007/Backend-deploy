require('dotenv').config()

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/debu',(req,res)=>{
    res.send("This is debus page")
})

app.get('/debu/new',(req,res)=>{
    res.send("This is debus new page")
})


app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})