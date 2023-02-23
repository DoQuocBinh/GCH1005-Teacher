var express = require('express');
var app = express()

app.set('view engine','hbs')
app.use(express.urlencoded({extended:true}))

var url = 'mongodb://127.0.0.1:27017';
var MongoClient = require('mongodb').MongoClient;

app.post('/add',async (req,res)=>{
    const name = req.body.txtName
    const price = req.body.txtPrice
    const picURL = req.body.picURL
    const newProduct = {
        'name': name,
        'price':price,
        'picURL':picURL
    }
    let client = await MongoClient.connect(url)
    let dbo = client.db("GCH1005")
    await dbo.collection("products").insertOne(newProduct)
    res.redirect("/")

})

app.get('/add',(req,res)=>{
    res.render('add')
})
app.get('/delete/:id',async (req,res)=>{
    const id = req.params.id
    let client = await MongoClient.connect(url)
    let dbo = client.db("GCH1005")
    var ObjectId = require('mongodb').ObjectId
    let condition = {"_id" : new ObjectId(id)};
    await dbo.collection("products").deleteOne(condition)
    res.redirect("/")
})

app.get('/',async (req,res)=>{
    let client = await MongoClient.connect(url)
    let dbo = client.db("GCH1005")
    let products = await dbo.collection("products").find().toArray()
    res.render('main',{'products':products})
})

const PORT = process.env.PORT || 8000
app.listen(PORT,()=>{
    console.log("Server is up!")
})