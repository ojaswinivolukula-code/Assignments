import express from "express"
const app=express()

app.get("/home",(req,res)=>{
    res.json("This is home page")
})
app.get("/contactus",(req,res)=>{
    res.json("Contact us at contact@contact.com")
})
app.get("/about",(req,res)=>{
    res.json("Welcome to the About page!")
})


app.listen(3000,()=>{
    console.log("Server is running on http://localhost:3000")

})
