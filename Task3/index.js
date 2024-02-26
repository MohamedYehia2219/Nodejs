const PORT=8000;
const DB_URL="mongodb://localhost:27017/test" 
//server
const express =require('express');
const {userRoute}= require('./routes/user')
const mongoose = require('mongoose');

const server = express();
//server.listen(PORT,()=>{console.log(`server is listening on port ${PORT}`);})
//third party middleware
server.use(express.json());
//server.use("/users",userRoute);
//mongoose
mongoose.connection.once("open",()=>{
    console.log("llllllllllllllllllllllllllllllllllll");
    server.listen(PORT,()=>{console.log("connected to DB")})
})
//mongoose.connect(DB_URL).then(()=>{console.log("connected to DB");}).catch((err)=>{console.log(err);})
// application level middle ware
// server.use((req,res,next)=>{
//     console.log(req.method , req.url);
// })
