// url mainlly consist of the 

// it also consist of query parameters eg https/google.com/search?q=my+docs---------
// so until the google.com/search it was the 
// https------protocol
// www.google.com------domain
// search--------path
// -------------from  --q--- the query parameter began which will lookout into the database to find out the value and give the res 


const http=require('http')
const fp=require('fs')


const url= require('url');




// this should be done Using Express

const MyServer=http.createServer((req,res)=>{

if (req.url === '/favicon.ico ')  res.end();

const log=`${Date.now().toLocaleString()} : New user request from ${req.url} \n`



// we should get the values from the   querything we have suppose i passed the query after that domain name as myname=maheshetc
const myurl=url.parse(req.url,true)


console.log(myurl)



fp.appendFile("log1.txt",log, (error,data)=>{




    switch (myurl.pathname) {
        case '/':res.end("Hello from the server Homepage")

            break;
        case "/about":
                const qp=myurl.query.name
                res.end(`Hello ${qp}`)
            break;
        case "/contact":res.end("Hello from the server Contact Page")
            break;

        default:res.end("Error 404 Not Found")

        
    }


    

}  )

}  )

MyServer.listen(3000,()=>{console.log("Server has Been started")})