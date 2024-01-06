//Arrow Function.

// * In 2015 -> ES6 this feature came

const user = {
    username:"debu", 
    price:999,

    wellcomeMessage: function(){
        console.log(`${this.username} wellcome to website.`)
        console.log(this)
    }
}
// user.wellcomeMessage()
// user.username  = "Smith"
// user.wellcomeMessage()


console.log(this) //here in node this value always empty 
// but in browse this value is "window" which is global obj.


//The arrow function..


// const addTwo = (num1, num2) =>{ //ata hoya6e explicit return 
//     return num1+num2 //jodi ami return keyword likhi thahole amake "double bondhoni use korte hobe",
// }

//implicite return .
const addTwo = (num1, num2) =>(
    num1+num2  // jodi ami return keyword na likhi thahole make "First Bondhoni" use koete hobe.
)
console.log(addTwo(3, 4))



// const myArr = [2, 5, 3, 7, 8]
// myArr.forEach(() =>())