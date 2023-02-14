var express = require('express')
var app = express()

app.set('view engine','hbs')
app.use(express.urlencoded({extended:true}))//gui textbox, html element den app.js
app.use(express.static('public')) //su dung javascript, anh, stylesheet trong public

app.get('/',(req,res)=>{
    res.render('home')
})

app.post('/register',(req,res)=>{
    let name = req.body.txtName
    res.render('home',{name:name})
})

const PORT = process.env.PORT || 3000
app.listen(PORT,()=>{
    console.log("Server is up!")
})
