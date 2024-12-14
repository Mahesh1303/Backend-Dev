const express=require('express')
const { MongoConnection } = require('./connection')
const urlroutes=require('./Routes/routes')
const cors=require('cors')


const app=express()

const port =500

// Database 

const url="mongodb://127.0.0.1:27017/URL-Shortner"

MongoConnection(url)
.then(()=>{

    return console.log("Mongodb Connected Successfully ")
})
.catch((err)=>{
    return console.log("Mongodb Error :" ,err)
})



// Middlewares

app.use(express.urlencoded({extended:true}))

app.use(express.json())

app.use(cors())
// Routes

app.use('/url',urlroutes)





app.listen(port,()=>{

console.log(`Server started at port : ${port}`)

})

