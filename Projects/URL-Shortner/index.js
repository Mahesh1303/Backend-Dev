const express=require('express')
const { MongoConnection } = require('./connection')
const urlroutes=require('./Routes/routes')


const app=express()

const port =4000

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


// Routes

app.use('/url',urlroutes)





app.listen(port,()=>{

console.log(`Server started at port : ${port}`)

})

