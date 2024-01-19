// console.log(Math.PI)
Math.PI = 5 //I try to change constant value of PI
// console.log(Math.PI) //But it's not change.
//why not change ?

const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(descriptor)


//define our own object 
//getOwnPropertyDescriptor

const user = {
    name:"debu", 
    email:"debapriyo00@gmail.com",

    isLogin: function(){
        console.log(`User is't logIn!`)
    }
}
console.log(Object.getOwnPropertyDescriptor(user, "name"))
//define our own property.
 /** Object.defineProperty(user, "name",{
    writable:false,
    enumerable:false, //if this flag is false then i can't iterate 

})
console.log(Object.getOwnPropertyDescriptor(user, "name"))*/

//Iterate .
for (let [key, value] of Object.entries(user)) { //here function also be print.
    if(typeof value != 'function'){
        console.log(`${key} : ${value}`)
    }
}
 