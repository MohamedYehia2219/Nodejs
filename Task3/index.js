const PORT=5000;
const DB_URL="mongodb://localhost/testDB" 
//server
const express =require('express');
const server = express();
server.listen(PORT,()=>{console.log(`server is listening on port ${PORT}`);})
//third party middleware
server.use(express.json());
//mongoose
const mongoose = require('mongoose');
mongoose.connect(DB_URL).then(()=>{console.log("connected to DB");}).catch((err)=>{console.log(err);})