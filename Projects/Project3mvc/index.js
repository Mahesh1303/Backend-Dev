const express=require('express')

const app = express();

const userRouter=require('./routes/routes')

const {connectMongo}=require('./connection')

const{logreq} = require('./middlewares/middlewares')





// Databases

const url="mongodb://127.0.0.1:27017/Database-1"
connectMongo(url)
  .then(()=>{console.log("Mogodb Connected Successfully")})
  .catch((err) => console.log("mongodb Error", err));



// Middlewares ------Plugin 



app.use(express.urlencoded({extended:false}))
app.use(logreq('./log.txt'))

app.use(express.json());





// Routes

app.use('/api/user',userRouter)



// Assigning server port 
 
app.listen(300, () => {
  console.log("Server Started At Port 300");
});
