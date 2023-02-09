var express = require('express')
var app = express()
var fs = require('fs')

app.set('view engine','hbs')

app.get('/',(req,res)=>{
    let fruits = fs.readFileSync("data.txt","utf-8")
    fruits = fruits.split(';') //chuyen fruits thanh array
    let name = "Jack Sparrow"
    res.render('home',{'fruits':fruits,'name':name}) // pass fruits into home
})

app.use(express.urlencoded({extended:true}))//allow to read data from HTML elements
app.post('/register',(req,res)=>{
    let name = req.body.txtName
    let email = req.body.txtEmail
    res.render('home',{name:name,email:email})
})

app.get('/student',(req,res)=>{
    res.render('student')
})

const PORT = process.env.PORT || 8000
app.listen(PORT,()=>{
    console.log('Server is up',PORT)
})