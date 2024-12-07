const http=require('http')

const express=require('express')

const app=express();

app.get("/",(req,res)=>{
    return res.end("Hello From Homepage")

})

// its all inbuilt

// http://localhost:3000/about?name=Mahesh for this query its inbuilt everything is inbuilt in this
app.get("/about",(req,res)=>{
    return res.end("Hello From About" + " " +  req.query.name)

})



// const myServer=http.createServer(app)

// myServer.listen(3000,(err)=>{
// console.log("Server Has Beed Started Successfully")
// })


// it also provides 
app.listen(3000,()=>console.log("Server Started Successfully"))