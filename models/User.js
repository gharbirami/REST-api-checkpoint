const mongoose=require("mongoose")
const schema=mongoose.Schema

const UserSchema=new schema({
    name:{
        type:String
    },
    email:{
        type:String,
        unique:true
    },
    phone:{
        type:Number
    },
    dateCreation:{
        type:Date,
        default:Date.now()
    }
})
module.exports=User=mongoose.model('user',UserSchema)