const express = require("express");
const User = require("../model/user.model");
const errorHandler = require("../helpers/errorhandler.helper");

let routes = express.Router();
// CRUD Routes
//----------------------------------------
routes.get("/data",function(req, res){
    // console.log("get request for data recieved");
    User.find().then( users => res.status(200).json(users) ).catch(error => errorHandler(error) );

});

routes.post("/add", function(req, res){
    // console.log("add user post request recieved", req.body);
    let user = new User(req.body);
    user.save().then(function(dbres){
        res.json({ 'message': dbres.username+'was added'})
    })
    .catch(function(error){
        errorHandler(error)
    })
})

routes.delete("/delete/:id",function(req, res){
    // console.log("delete request recieved for user with id "+req.params.id);
    User.findByIdAndDelete({_id : req.params.id})
    .then(deleteduser => {
        res.status(200).json({"message": deleteduser.username+" was deleted"})
    })
    .catch(error => errorHandler(error) );

});

routes.get("/edit/:id",function(req, res){
    User.findById(req.params.id)
    .then(user2update => res.status(200).json(user2update))
    .catch(error => errorHandler(error));
});

routes.put("/edit/:id",function(req, res){
    User.findById(req.params.id)
    .then( updateUser => {
        updateUser.username = req.body.username;
        updateUser.usermail = req.body.usermail;
        updateUser.usercity = req.body.usercity;
        updateUser.save()
        .then((userupdated)=>{
            res.json({"updatedmessage":userupdated})
        })
        .catch(error => errorHandler(error));
    })
    .catch(error => errorHandler(error))
});

module.exports = routes;