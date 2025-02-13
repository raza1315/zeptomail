const express = require("express");
const cors=require("cors");

const app=express();
const PORT=3000;
app.use(cors());
app.use(express.json());

app.listen(PORT,()=>{
console.log()"server is running on port:",PORT);
})

app.post("/send-mail",(req,res)=>{
const {data}=req.body;

})
