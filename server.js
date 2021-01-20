const express=require("express")
const app=express()
const connectDB=require ("./config/connectDB")
require('dotenv').config({path:'./config/.env'})

// middleware
app.use(express.json())

// connect database
connectDB()

//routes
app.use("/users",require("./routes/user"))

// run server
app.listen(process.env.PORT,err=>
    err? console.log("Error"):console.log(`Server is running on port ${process.env.PORT}`)
)