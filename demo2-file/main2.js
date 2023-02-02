var fs = require('fs')

//vd ve content: Trang, 27, Linh, 26, Cuong, 23
const docFile = (err,content) =>{
    let danhSach = []
    let ary = content.split(',')
    //sau khi doc xong: ary = ['Trang', '27','Linh','26','Cuong','23']
    for(i=0;i<ary.length;i+=2){
        let sv = {
            name : ary[i].trim(),
            age : parseFloat(ary[i+1]) 
        }
        danhSach.push(sv)
    }
    printDanhSach(danhSach)
}
const printDanhSach = (danhSach) =>{
    for(i=0;i<danhSach.length;i++){
        console.log(danhSach[i].name + ':' + danhSach[i].age)
    }
}
fs.readFile("data.txt","utf8",docFile)