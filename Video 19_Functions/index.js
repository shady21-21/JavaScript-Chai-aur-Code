//define a function
const name = "Debu"
function printMyName(){
    console.log(`Hello i'm ${name}`)
}

printMyName()  //If i only write  "printMyName" then it's only ref the referance 
//when i put "()" then it's in excution mode.

//add two number.
function addTwoNums(num1, num2){
    console.log(`Addation of two number is ${num1+num2}`) 
}

//call the function.
addTwoNums(10, 12)

//Note : Function a within bracket jeta pass kori ota --> "parameter"
//       Function call kora somoy jete pass kori ota hoya6e --> argument.



function logInUsermessage(userName = "dummy"){
    if(!userName){
        console.log("Please enter your username!!!!!")
        return
    }
    return `${userName} just login..`
}
// console.log(logInUsermessage("akd999"))
console.log(logInUsermessage("debu07"))