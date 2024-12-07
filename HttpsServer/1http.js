// const http = require("http");

// const MyServer = http.createServer((req, res) => {
//   console.log("New Incoming Request ");
//   console.log(req.headers)
//   res.end("Hello for that request from the server");
// });


// MyServer.listen(3000,()=>{console.log("server Started Successfully")})


const http = require("http");

const fp= require('fs')


const MyServer=http.createServer( (req,res)=>{
    const log =`${Date.now()}: new User Request \n `

    fp.appendFile("log.txt",log,(error,data )=>{

        res.end("Hello From the Server ")
    })



} )

MyServer.listen(3000,()=>{console.log("server Started Successfully")})



