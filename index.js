const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://localhost:27017/travel');

const UserSchema = mongoose.Schema({
    name: String,
    age: Number
});

const UserModel = mongoose.model("users", UserSchema)

app.get('/getUses', function(req, res){
    UserModel.find({}).then(function(users){
        res.json(users)
    }).catch(function(err){
        console.log(err)
    })
})

app.listen('3000', () => {
    console.log('Server is running at port 3000');
})