const express = require('express')
const app = express()
app.set("view engine","ejs")




app.get('/',(req,res) =>{
    res.render('home')
})

app.get('/register.ejs',(req,res) =>{
    res.render('register')
})


app.listen(3000,() =>{
    console.log("Server is listening")
})