/*
 Object are declear into two types---
                                    1. Literals Way
                                    2. Constructor Way

 Here there is another concept is arise - "SingleTon"

 * when is declere into obj into Literals Way then SingleTon is't created.
 * Constructor Way ----> singleTon created.
 
*/

// ************************  OBJ LITERALS **********************************
const myDetails = {
    name:"Debu", 
    age : 21, 
    location: "Hugli", 
    email:"akd99@gmail.com", 
    isLogIn:false,
    lasLogInDays:[
        "Monday", "Wednesday", "Friday"
    ]
};

//Access the Objects.
// console.log(myDetails.email)
//anotherway to access.
// console.log(myDetails["email"])


//define a Symbol and add to in object and print that symbol.
const mySymbol = Symbol("key")

//create obj
const laptop ={
    name:"MacBook M1", 
    brand:"apple", 
    OS:"Macintosh", 
    price: 80000,
    [mySymbol]:"GG",  //symbol to use syntax.
};
// console.log(laptop[mySymbol]) //this is the syntax to use symbol
//how to change the value in object.
laptop.name = "HP"
// console.log(laptop)
laptop.name = "DELL"
// console.log(laptop)
// Object.freeze(laptop) //for this line .i can't change any value in obj
// laptop.name = "Asus"
// console.log(laptop)

//Creating fun.
myDetails.greeting = function(){
    console.log("Hello this is all about my details!")
}
console.log(myDetails.greeting())
// console.log(myDetails.greeting) //here fun not exute his ref return back.

myDetails.greetingTwo = function(){
    console.log(`Hello my name is ${this.name} i am watching JS videos`)
}
console.log(myDetails.greetingTwo())


//Most of the cases when we are using Object value we are using "dot" operator.