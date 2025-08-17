const {initialiseDatabase}=require('./database/db.connect')
initialiseDatabase()
const express=require("express")
const app=express()
app.use(express.json())
const cors=require('cors')

const PORT=3000
const corsOptions={
    origin:"*",
    credentials:true,
    optionsSuccessStatus:200
}
const Video = require("./models/");
app.use(cors(corsOptions))
app.get("/",(req,res)=>{
    res.status(200).json({message:"Hello Devs !"})
})
app.listen(PORT,()=>{
    console.log("Server is running on PORT: ",PORT)
})