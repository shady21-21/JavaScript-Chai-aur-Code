// Immediately Invoke Function Expression.(IIFE)

//--> 1. Immediately excute.
//--> 2. Don't need to be pollution from global scope.

//IIFE is use because Sometime global scope pollu is occure to remove that we are using IIFE.

//Normal fun excution.
// function print(){
//     console.log("I am learing Java Script.")
// }
// print() //excute

//IIFE is writing in this way.

(function quote(){
    console.log("Do what you do it till your last breadth") //this is Name IIFE
})();

(()=>{
    console.log("DB connect successfully.")
})();

//if i want to passs a varriable.
((name)=>{
    console.log(`My name is ${name}`)
})('Travis')


//Writing two or more than IIFE in one file is to just give a semiclone after completeing one IIFE.

