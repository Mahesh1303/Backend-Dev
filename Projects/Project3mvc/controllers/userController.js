const Userdb=require('../models/user')


const handleGetAllusers=async(req,res)=>{

    const AllDbUsers = await Userdb.find({});
                                     
    return res.json(AllDbUsers);

}



const handleGetUserbyId=async(req,res)=>{
    const user=await Userdb.findById(req.params.id)
    if(!user){
      res.status(404).json({
        msg:"No user Found"
      })
    }
    return res.json(user);

}

const handleUpdateUserbyId=async(req,res)=>{
    const eid=req.params.id
  
  
    const {first_name,last_name,email}= req.body;

    await Userdb.findByIdAndUpdate(eid,{firstname:first_name,lastname:last_name,email:email})
    
      
    return res.json({ 
              status: "success",
        user: `${eid}`,
        res: "has been successfully updated" 

    });

}

const deleteUserbyId=async(req,res)=>{

    const eid = req.params.id
      await Userdb.findByIdAndDelete(eid)
  
        return res.json({status:"successfullydeleted ", user:`${eid}`})
}


const CreateUser=async(req,res)=>{

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
}


module.exports={
    handleGetAllusers,handleGetUserbyId,handleUpdateUserbyId,deleteUserbyId,CreateUser
}