const mongoose=require("mongoose")

const connectDB=()=>{
    mongoose
    .connect(process.env.MONGO_URI,{useUnifiedTopology: true,useNewUrlParser: true,useCreateIndex: true,useFindAndModify: false})
    .then(()=>console.log("Mongoose connected"))
    .catch(()=>console.log("DB connection error"))
}
module.exports=connectDB;