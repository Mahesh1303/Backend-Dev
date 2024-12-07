// the http methods are of following 


// ----------Get----------------

                    // When you put some data we always the browser always calls a get method for providing that data




// ----------Post---------------

                // The post request tells the server to do something like create in that 

                // eg for signup the user provide name id password the post method will send that data and will create an entry in the    database 
                // ie we use it to add new entries in the database or to do send data to create something

                // it is also used to verify something

// ----------Put----------------

                // put is used to upload images on the server 

                
                
// ----------Patch--------------

                // patch is used to update something on the server
                // updaring our username etc


// -----------Delete--------------

                // Delete for deleting our acc etc from the database

// Every Page on the website consist of one of this
// so to simplify this we used Express Framework Which Made Our work A lot Easier and More Good 



                


const http=require('http')
const fp=require('fs')
                
                
const url= require('url');
                
                


const MyServer=http.createServer((req,res)=>{

if (req.url === '/favicon.ico ')  res.end();

const log=`${Date.now().toLocaleString()} : New user request from ${req.url}   and method  is ${req.method}\n`



// we should get the values from the   querything we have suppose i passed the query after that domain name as myname=maheshetc
const myurl=url.parse(req.url,true)





fp.appendFile("log1.txt",log, (error,data)=>{




    switch (myurl.pathname) {
        case '/':res.end("Hello from the server Homepage")

            break;
        case "/about":
                const qp=myurl.query.name
                res.end(`Hello ${qp}`)
            break;
        case "/contact":
            res.end("Hello from the server Contact Page")
            break;
        case "/signup":
            if(req.method==='GET')
            res.end("this is a signup Form ")
            else if(req.method==='POST')
            res.end("Form has Been Successfully Submitted")
            break;

        default:res.end("Error 404 Not Found")

        
    }


    

}  )

}  )

MyServer.listen(3000,()=>{console.log("Server has Been started")})



