const express = require('express')
const app = express()
const session = require('express-session')
const BodyParser = require('body-parser')
app.set("view engine","ejs")
app.use(BodyParser.urlencoded({extended:true}))


app.use(session({
    secret:"NoOneKnow",
    resave:false,
    saveUninitialized:false,
}))

app.get('/home',(req,res) =>{
    res.render('home')
    
    
})


app.get('/register.ejs',(req,res) =>{

    res.render('register')
    if(req.session){
        console.log(req.session.user)
    }


   
    
    
    
})
app.get('/test',(req,res) =>{
    if(!req.session.user){
        req.session.user = {
            name:"Guest",
            role:"Visitor"
        }
    }
    else
    {console.log("Old-user")}

    }
    
    
)

app.post('/register.ejs',(req,res) =>{
    console.log(`User_name:${req.body.name} and Password is ${req.body.pass}`)
    res.redirect('/')
})


app.listen(3000,() =>{
    console.log("Server is listening")
})
