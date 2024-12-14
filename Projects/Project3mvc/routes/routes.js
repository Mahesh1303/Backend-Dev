const express = require("express");
const {handleGetAllusers,handleUpdateUserbyId,handleGetUserbyId,deleteUserbyId,CreateUser} = require('../controllers/userController')





const router=express.Router()



  
  
  router
  .route("/")
  .get(handleGetAllusers)
  .post(CreateUser)
  
  
  
  
  
  router
    .route("/:id")
    .get(handleGetUserbyId)
  
  
  
    .patch(handleUpdateUserbyId)
  
  
    .delete(deleteUserbyId);
  
  
  
  

  module.exports=router;