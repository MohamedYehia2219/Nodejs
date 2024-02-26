const mongoose = require('mongoose');
const schema= mongoose.Schema;
const postSchema=new schema({
    title: { type: String, required: true,},
    description: {type: String, required: true},
    creator: {type: mongoose.Types.ObjectId, ref: "User", required: true}
})
const postModel = mongoose.model("Post", postSchema);
model.exports=postModel;
