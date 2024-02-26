const express= require('express');
const userRoute=express.Router();
const userModel = require('../models/user')

userRoute.post("/",(req,res)=>{
    let newUser=new userModel(req.body);
    newUser.save()
    .then(usr=>{
        res.status(201).json(usr);
    })
    .catch(err=>{
        console.log(err);
        res.status(400).send("Error");
    })
})

userRoute.get("/",(req, res)=>{
    userModel.find()
    .then((users)=>{
        res.status(200).json(users);
    })
    .catch(err=>{
        console.log(err);
        res.status(400).json({message:"Error"})
    })
})

userRoute.get("/:id",(req, res)=>{
    userModel.find({_id: req.params.id})
    .then((usr)=>{
        res.status(200).json(usr);
    })
    .catch(err=>{
        console.log(err);
        res.status(400).json({message:"Error"})
    })
})

userRoute.put("/:id",(req, res)=>{
    userModel.findOneAndUpdate({_id: req.params.id}, req.body)
    .then(()=>{
        res.status(200).json({message: "updated successfully.."});
    })
    .catch(err=>{
        console.log(err);
        res.status(400).json({message:"Error"})
    })
})

userRoute.delete("/:id",(req, res)=>{
    userModel.findOneAndDelete({_id: req.params.id})
    .then((usr)=>{
        res.status(200).json({massage :`${usr} is successfully deleted `});
    })
    .catch(err=>{
        console.log(err);
        res.status(400).json({message:"Error"})
    })
})

module.exports= userRoute;