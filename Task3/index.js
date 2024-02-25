const PORT=5000; 
const express =require('express');
const server = express();
server.listen(PORT,err=>{console.log(err);})
//third party middleware
server.use(express.json());