
//OBJECT er ProtoType access by --> Arrays , Functions, Strings

const myHero = ["IronMan", "Captain America", "AntMan"]

let HeroPower = {
    IronMan:"Jarvis",
    CaptainAmerica:"Strength",
    AntMan:"Ants",

    getIronManPower:function(){
        console.log(`IronMan Power is ${this.IronMan}`)
    }
}

Object.prototype.debu = function(){
    console.log(`Hello I'm Debu!`)
}

//So i'm declere a new prototype in Object then it should be access by the Objects.
HeroPower.debu()


//let's see my define prototype is access by the Array or not ?
myHero.debu() //yes it's works.


//Now i check if i decleare the prototype in array then it should be use by obj or not ?

Array.prototype.dogg = function(){
    console.log(`Hello my Dogg!`)
}
//it's works for array 100%
myHero.dogg()

//let's see it's use by the object or not.
// HeroPower.dogg() //it's give ERROR!!! 



//CONCEPT : "INHERITANCE"
const user = {
    username:"debu",
    email:"ddd@gmail.com"
}

const Teacher = {
    makeVideo:true,
}
const TeachingSupport ={
    isAvaliable:false,
}
const TASupport ={
    makeAssignment :"JS Assignment",
    fullTime:"true",
    __proto__: TeachingSupport //get all info of TeachingSupport .Inheritance
}

Teacher.__proto__ = user //inheritance

//mordern Syntax
Object.setPrototypeOf( TeachingSupport , Teacher)



//OUR GOAL :
let myName = "debu         " //here i give lot of space 
console.log(`MyName length is ${myName.length}`) // so when i print the length of my String it's count the space 
//and provide the wrong length 
//So Solve the problem ?

//ANS:
//Like if we have one or two Strig then it would be solve easily using trim() function then and length function.
//but if we have more than 1000 string what we will do ?

//So i inject a prototype in String and call that .
String.prototype.trueLen = function(){
    console.log(`${this}`)
    console.log(`True Length is :${this.trim().length}`)
}

//time to call the fun.
myName.trueLen()

//direct access the property.
"DoggMF".trueLen()

