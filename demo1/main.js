str = 'Apple, Banana, Kiwi'
mar = str.split(',')
//console.log(mar[1])
for(i=0;i<mar.length;i++){
    mar[i] = mar[i].trim()
    console.log(mar[i])
}
prices = '20, 18, 16'
prices = prices.split(',')
prices.forEach(element => {
    element = element.trim()  
});
//mot mang rong
var numbers = []
prices.forEach(element => {
    numbers.push(parseFloat(element))
});
for(i=0;i<mar.length;i++){
    console.log(mar[i] + ": $" + (numbers[i] +2) )
}
var data = "Linh, 18, Trang, 20, Dung, 23"
data = data.split(',')
var names = []
var ages = []
for(i=0;i<data.length;i++){
    if (i % 2 == 0){
        names.push(data[i].trim())
    }else{
        ages.push(parseFloat(data[i]))
    }
}
console.log(names)
console.log(ages)

// var student = {
//     name : 'Phuong',
//     age : 20,
//     homeTown: 'Hai Duong'
// }
// console.log(student.name)
// console.log(student.age)
var students = []
for(i=0;i<data.length;i+=2){
    var student = {
        name : data[i].trim(),
        age : parseFloat(data[i+1]) 
    }
    students.push(student)
}
console.log(students)
