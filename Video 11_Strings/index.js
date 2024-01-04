const name = "Debu"
const repoNum = 26
console.log(name + repoNum)  //Don't using this for concatination this is backdated.

//use backtext --->Here come string interpollution.
console.log(`My name is ${name} and my repo number is ${repoNum}`) 
//This is called "String Interpollution" This is Morden way. 
//Here we are using multiple fun like -> ${name.upperCase()}


const gameName = new String("AmongUs")
//here gameNamre is not a string is't an Obj.
//here AmongUs each letter is store as key-Value pair.
console.log(gameName[0])
console.log(gameName[1])


//To see the obj as a String.
console.log(gameName.__proto__)

//String have multiple ProtoType..
console.log(gameName.length)

console.log(gameName.toUpperCase()) //convert into upperCase.

//check there character with the position.
console.log(gameName.charAt(2)) // output: 2 coz in 2 index o is there

//check the index of particular charcter.
console.log(gameName.indexOf('o'))

//Generate SubString from Org String.
const newString = gameName.substring(0, 5) //last value is't include.We cant's give neg(-) value inside the parameter.
console.log(newString)
const anotherString = gameName.slice(-7, 4)
console.log(anotherString)


//+++++++++++++++++++++++++++++++++++++++++++++
//Trim and replace methord.

const myId = "     debu99WB22    "
console.log(myId)
console.log(myId.trim()) //go mdn for more info.

const url ="https://debu.com/akd%20wb22"
//in url suppose any person make space in his url so browse automaticall convert it %20 urrl coding 
//so i want to remove that %20 
console.log(url)
console.log(url.replace("%20", "-"))

console.log(url.includes("debu"))


//Split Methord.
const laptop = "Mac-Book-air"
console.log(laptop.split("-"))

