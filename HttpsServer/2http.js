const http=require('http')
const fp=require('fs')




// this should be done Using Express

const MyServer=http.createServer((req,res)=>{

const log=`${Date.now().toLocaleString()} : New user request from ${req.url} \n`
fp.appendFile("log1.txt",log, (error,data)=>{


    switch (req.url) {
        case '/':res.end("Hello from the server Homepage")

            break;
        case "/about":res.end("Hello from the server About page")
            break;
        case "/contact":res.end("Hello from the server Contact Page")
            break;

        default:res.end("Error 404 Not Found")

        
    }


    

}  )

}  )

MyServer.listen(3000,()=>{console.log("Server has Been started")})