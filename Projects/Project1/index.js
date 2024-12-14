const express = require("express");
const app = express();
let data = require("./MOCK_DATA.json");
const fs=require('fs');
const { send } = require("process");

// Middlewares ------Plugin 



app.use(express.urlencoded({extended:false}))// this middleware actually took the reqs content and then made objects out of it and then added it into the body
                                            //and thats how we access req.body 


app.use((req,res,next)=>{
  console.log("Hello From Middleware 1")

  // one eg of middlware

  fs.appendFile('./log.txt' , `${Date.now() } , path : ${req.path} , method : ${req.method} \n` ,(err,dat)=>{

 return next();

  })


  // return res.json({msg:"Hello From MiddleWare 1"})//submitted without going to the server 
  //next(); //but this will further after processing the incoming request will pass to the next;
  
  // we can also pass the params to the routes

})

app.use((req,res,next)=>{
  console.log("Hello From Middleware 2") //it will run from the order we provide
  next()

})

















// Routes ---------------------------------------


app.get("/users", (req, res) => {
  // This as a html it will be called server side rendering this can only be displayed on the browsers

  const html = `
                    <ul>
                        ${data
                          .map((dat) => {
                            return `<li> ${dat.first_name}</li>`;
                          })
                          .join("")}
                    
                    </ul>
                `;

  return res.send(html);
});











// ----------------------Headers----------------------------------//


// Headers The Meta Info about the data we send with response is the headerof respo
// 







app.get("/api/users", (req, res) => {
  // This represents API which could be used on any device--------------------

  // res.setHeader('MyName',"Mahesh")// this means that when we sent the response to a req we can actually sent our own addition header content in
                                  //  header header

  // the User or requester can also send some His own header and a server can console it 

  // good practice is always add X- to custom headerrs Because we are sending it like a builtin header


  //  we will further use buildin headers because they are required

  // we will require it further as we are going to use token from user as req from user will contain that token and that toke will contain info like
  // his id passwd etc which can be used for the authentication and autherization
  // and this token willl be used by middlewares to check the auth  etc 

  res.setHeader('X-MyName',"Mahesh")
  console.log(req.headers)
                                  
  return res.json(data);
});





app
  .route("/api/users/:id")
  .get((req, res) => {
    // Showing only particular user --------------------------
    const eid = req.params.id;
    const user =data.find((user)=>user.id==eid)
    if(!user){
      res.status(404).json({
        msg:"No user Found"
      })
    }
    return res.json(data.filter((data) => (data.id == eid ? data : null)));
  })

  .patch((req, res) => {
    // Edit User With Id
    const eid=parseInt(req.params.id);
    const {first_name,last_name,email}= req.body;
    
    const newbody={id:eid,first_name,last_name,email}

    


//     // const findAndUpdateUser = (users, idToFind, updateData) => {
    const user = data.find(user => user.id ===eid);
    if (user) {
        Object.assign(user, newbody);
    }

    
  //   data.map((user) => {

  //     return(user.id == eid ? { ...user, ...newbody } : {user})
      
  //   }
  // );
//   const updateUserMap = (users, idToFind, updateData) => {
//     return users.map(user => 
//         user.id === idToFind 
            // ? { ...user, ...updateData }
//             : user
//     );
// }




  fs.writeFile('./MOCK_DATA.json', JSON.stringify(data), (err, dat) => {
    console.log(data)
    return res.json({ 
              status: "success",
        user: `${eid}`,
        res: "has been successfully updated" 

    });
});
})


  .delete((req, res) => {
    // Delete User With Id
    const eid = parseInt(req.params.id);
    data = data.filter((user) => user.id !== eid);

    fs.writeFile('MOCK_DATA.json', JSON.stringify(data),(err,dat)=>{

      return res.json({status:"successfullt deleted ", user:`${eid}`})
    })
  });






app.post("/api/users", (req, res) => {
  
  // Post Request that is for creating a new user

// status 400 if we require all fields from the client to send it to the database







const user = req.body;

  if(!user || ! user.first_name || !user.last_name || !user.email){
    return res.status(400).json({
      msg:"required all fields "
    })
  }
  const newUserId = data.length +1
  data.push({...user,id:newUserId})
  fs.writeFile('MOCK_DATA.json', JSON.stringify(data),(err,dat)=>{

    return res.status(201).json({status:"success ", user:`${newUserId}`})
  })


});





app.listen(3000, () => {
  console.log("Server Started At Port 3000");
});
