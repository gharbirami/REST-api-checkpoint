const express = require("express")
const router = express.Router()
const User = require("../models/User")

// test
// localhost:5000/users/test
// @path
// test route
// type(private or public)
router.get('/test',(req,res) => {
res.send("Tested")
})

// add user (to be shown on mongo compass)
// router.post("/addUser",(req,res)=>{
//     const {name,email,phone}=req.body
//     const newUser=new User({
//         name,phone,email
//     })
//     newUser.save()
//     .then(users=>res.json({msg:"User added",users}))
//     .catch(err=>console.log(err))
// })

// @path: /addUser
// Add user
// type(private or public)
router.post("/addUser",async(req,res)=>{
    const {name,email,phone}=req.body
    try{
        const newUser=new User({
            name,phone,email
        })
        let user=await newUser.save()
        res.json({msg:"User added",user})
    }catch (err){
        res.json(err)
    }
})

// get all users
// @path: /all
// type(private or public)
router.get("/all",async(req,res)=>{
    try{
        let users=await User.find()
        res.status(200).json({msg:"List of all users",users})
    }catch (err){
        res.json(err)
    }
})

// delete user
// @path: /deleteUser/:_id
// type(private or public)
router.delete("/deleteUser/:_id",async(req,res)=>{
    const {_id}=req.params
    try{
        let user=await User.findOneAndDelete({_id})
    res.json({msg:"User deleted",user})
    }catch (err){
        res.json(err)
    }
})

// get user by id
// @path: /:_id
// type(private or public)
router.get("/:_id",async(req,res)=>{
    const {_id}=req.params
    try{
        let user=await User.findOne({_id})
        res.json({msg:"User by id",user})
    }catch (err){
        res.json(err)
    }    
})

// edit user
// @path: /editUser/:_id
// type(private or public)
router.put("/editUser/:_id",async(req,res)=>{
    const {_id}=req.params
    try{
        let user=await User.findOneAndUpdate(
            {_id},{$set:req.body}
        )
        res.json({msg:"User updated",user})
    }catch (err){
        res.json(err)
    }    
})

module.exports=router