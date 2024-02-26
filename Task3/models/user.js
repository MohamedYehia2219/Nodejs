const mongoose = require('mongoose');
const schema= mongoose.Schema;
const userSchema=new schema({
    name: { type: String, required: true,},
    email: {type: String, required: true, unique:true, match: /.+@.+\..+/},
    age: Number
})
const userModel = mongoose.model("User", userSchema);
module.exports= userModel;