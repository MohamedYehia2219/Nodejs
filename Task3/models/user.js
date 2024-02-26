const mongoose = require('mongoose');
const schema= mongoose.Schema;
const userSchema=new schema({
    name: { type: String, required: true,},
    email: {type: String, required: true, unique:true},
    age: Number
})
const userModel = mongoose.model("User", userSchema);
model.exports=userModel;