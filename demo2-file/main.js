var f = require('fs')

//cach 1: su dung ham dong bo
//var content = f.readFileSync("data.txt","utf-8")
//console.log(content)

//cach 2: su dung ham khong dong bo
function docFile (error,content){
    //neu co loi khi doc file
    if (error){
        console.log("File co the khong ton tai!")
    }else{
        console.log(content)
    }
}
f.readFile("data.txt",'utf8',docFile)
for(i=1;i<=5;i++){
    console.log(i)
}

f.writeFile("data.txt","12345",'utf8',function(err){
    console.log("Write file ket thuc!")
})