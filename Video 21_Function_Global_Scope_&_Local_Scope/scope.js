//Scope start with let, var, const

let a = 10
const b = 20
var c = 30
//what i write outside the curli brace that i "Global Scope" 
//the value which i declear global scope that is allow in Block scope but block scope value is't allow in global scope.

{ //this is called SCOPE
    //what i write inside the curli bracces that is called "Block scope"
    
}
// console.log(a)
// console.log(b)
// console.log(c)
a = 50 //this is global scope.
if(true){
    let a = 80
    console.log("INNER VALUE", a) //this is block scope
}
console.log(a)