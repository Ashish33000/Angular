const express=require("express");
const cors=require("cors");
const mongoose=require("mongoose");
const config=require("./config.json")
const routes=require("./routes/user.routes.js")
const helper=require("./helpers/errorhandler.helper.js")

let app=express();
app.use(express.json()).use(cors()).use(routes)
const url=config.cloudDB
mongoose.connect(url).then(res=> console.log("Db connected")).catch(err=>console.log("Error: ",err));


app.listen(config.port,config.host,err=> {
    if(err){
        console.log("Error",err);
    }else{
        console.log(`server is now live on ${config.host}:${config.port}`);
    }
})

