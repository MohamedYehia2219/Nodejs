const express =require('express');
const postRoute = express.Router();
const postModel=require("../models/post");

postRoute.post("/",(req,res)=>{
    let newPost=new postModel(req.body);
    newPost.save()
    .then(post=>{
        res.status(201).json(post);
    })
    .catch(err=>{
        console.log(err);
        res.status(400).send("Error");
    })
})

postRoute.get("/",(req, res)=>{
    postModel.find()
    .then((posts)=>{
        res.status(200).json(posts);
    })
    .catch(err=>{
        console.log(err);
        res.status(400).json({message:"Error"})
    })
})

postRoute.get("/:id",async(req, res)=>{
    postModel.find({_id: req.params.id})
    .then(async(post)=>{
        let userCreator = await postModel.find({_id: req.params.id}).populate("creator");
        console.log(userCreator[0].creator.name);
       // res.status(200).json({post, owner: userCreator[0].creator.name});
       res.status(200).json(post)
    })
    .catch(err=>{
        console.log(err);
        res.status(400).json({message:"Error"})
    })    
})

postRoute.put("/:id",(req, res)=>{
    postModel.findOneAndUpdate({_id: req.params.id}, req.body)
    .then(()=>{
        res.status(200).json({message: "updated successfully.."});
    })
    .catch(err=>{
        console.log(err);
        res.status(400).json({message:"Error"})
    })
})

postRoute.delete("/:id",(req, res)=>{
    postModel.findOneAndDelete({_id: req.params.id})
    .then(()=>{
        res.status(200).json({massage :`successfully deleted `});
    })
    .catch(err=>{
        console.log(err);
        res.status(400).json({message:"Error"})
    })
})








module.exports=postRoute;
