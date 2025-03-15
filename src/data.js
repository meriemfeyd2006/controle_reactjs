const express = require('express')//import
const app = express()
const cors = require("cors");   

const data = require("./data.json")
  

app.use(cors());
app.use(express.json())

app.listen(3001,()=>{   
    console.log("hello API")
})

// app.get('/data',(req,res)=>{
//     res.send("liste des equipes")
// })

app.get('/data',(req,res)=>{
    res.status(200).json(data)
})






