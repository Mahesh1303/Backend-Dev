const express = require("express");
const app = express();
let data = require("./MOCK_DATA.json");
const fs=require('fs');
const mongoose=require('mongoose')




// Databases

//connection

mongoose.connect('mongodb://127.0.0.1:27017/Database-1').then((console.log("Mongodb Connected ")))
.catch((err)=>console.log("mongodb Error",err))



// schemmaa\\




const useSchema= new mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    }
    


},{timestamps:true})



const Userdb=mongoose.model('user',useSchema);






















// Middlewares ------Plugin 



app.use(express.urlencoded({extended:false}))
app.use((req,res,next)=>{
  console.log("Hello From Middleware 1")

  fs.appendFile('./log.txt' , `${Date.now() } , path : ${req.path} , method : ${req.method} \n` ,(err,dat)=>{

 return next();

  })



})

app.use((req,res,next)=>{
  console.log("Hello From Middleware 2") 
  next()

})


app.use(express.json());





// Routes ---------------------------------------

app.get("/users", async (req, res) => {
  const AllDbUsers= await Userdb.find({})

  const html = `
                    <ul>
                        ${AllDbUsers
                          .map((dat) => {
                            return `<li> ${dat.firstname}</li>`;
                          })
                          .join("")}
                    
                    </ul>
                `;

  return res.send(html);
});


// / ----------------------Headers----------------------------------//


// Headers The Meta Info about the data we send with response is the headerof respo
// 



app.get("/api/users", async (req, res) => {

  const AllDbUsers = await Userdb.find({});

 
  res.setHeader('X-MyName',"Mahesh")
  console.log(req.headers)
                                  
  return res.json(AllDbUsers);
});





app
  .route("/api/users/:id")
 
 
  // Showing only particular user --------------------------
  .get( async (req, res) => {
   const user=await Userdb.findById(req.params.id)
    if(!user){
      res.status(404).json({
        msg:"No user Found"
      })
    }
    return res.json(user);
  })




  // Edit User With Id
  .patch(async (req, res) => {
    const eid=req.params.id


    const {first_name,last_name,email}= req.body;

    await Userdb.findByIdAndUpdate(eid,{firstname:first_name,lastname:last_name,email:email})
    
      
    return res.json({ 
              status: "success",
        user: `${eid}`,
        res: "has been successfully updated" 

    });

})


  .delete(async(req, res) => {
    // Delete User With Id
    const eid = req.params.id
    await Userdb.findByIdAndDelete(eid)

      return res.json({status:"successfullt deleted ", user:`${eid}`})
    
  });





  // Post Request that is for creating a new user

app.post("/api/users", async (req, res) => {

  const user = req.body;

  if(!user || ! user.first_name || !user.last_name || !user.email){
    return res.status(400).json({
      msg:"required all fields "
    })
  }
  const result =await Userdb.create({
    firstname: user.first_name,   
    lastname: user.last_name,    
    email: user.email
});

console.log("result :" ,result)

res.status(201).json({
  status:"Successully created"
})


});











app.listen(3000, () => {
  console.log("Server Started At Port 3000");
});
