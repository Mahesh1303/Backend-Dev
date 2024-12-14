const mongoose=require('mongoose')


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


module.exports=Userdb;