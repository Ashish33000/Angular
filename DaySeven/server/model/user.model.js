const mongoose = require("mongoose");

let Schema = mongoose.Schema;
let ObjectId = Schema.ObjectId;
let User = mongoose.model("User", new Schema({
    id : ObjectId,
    username : String,
    usermail : String,
    usercity : String 
}));

module.exports = User;