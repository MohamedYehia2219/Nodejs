const PORT=8000;
const DB_URL="mongodb://localhost:27017/test" 

const express =require('express');
const mongoose = require('mongoose');
const userRoute= require('./routes/user');

const server = express();
server.listen(PORT,()=>{console.log(`server is listening on port ${PORT}`);})
//third party middleware
server.use(express.json());

//mongo db connection
mongoose.connect(DB_URL).then(()=>{console.log("connected to DB");}).catch((err)=>{console.log(err);})

//application level middle ware
server.use((req,res,next)=>{
    console.log(req.method , req.url);
})

//routes
server.use("/users",userRoute);

