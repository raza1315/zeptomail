require("dotenv").config();
const express = require("express");
const cors=require("cors");
const {SendMailClient}=require("zeptomail");

const app=express();
const PORT=3000;
app.use(cors());
app.use(express.json());

const url="api.zeptomail.in/";
//send mail token of the mail agent:
const token = process.env.sendMailToken;
//creating the zeptomail client using the zepto mail package / sdk:
const client =new SendMailClient({url,token})

const sendMail=async()=>{
await client.sendMail({
from:{address:"raza@syedrizvi.co.in",name:"Raza Rizvi"},
to:[
{email_address:{address:"razasfs2003@gmail.com",name:"zeba khan hai"}}
],
subject:"Testing zeptomail api",
htmlbody:"<div><b> Test email sent successfully.</b></div>"
}).then(res=>console.log(res,"success")).catch(err=>console.log(err," : error"));
}
app.listen(PORT,()=>{
console.log("server is running on port:",PORT);
})

app.post("/send-mail",(req,res)=>{
const data=req.body;
console.log(data);
sendMail();
console.log("mail sent")
res.status(200).json({mail:"mail sent successfully! ..."})
})
