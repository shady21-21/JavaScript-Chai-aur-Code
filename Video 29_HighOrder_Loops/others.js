//For of loop.

const arr = [1, 2, 3,4,5]
for (const num of arr) {
    // console.log(num)
}

//we can use this for of loop String also.
const myname = "Debu"
for(const letter of myname){
    // console.log(`Each word is :${letter}`)
}


//Maps.
const map  = new Map() //map always contain unique value and also mantain the order.
map.set('IN', 'India')
map.set('USA', 'United State of America')
map.set('Fr', 'France')
// console.log(map)
//ami ki map er upor loop lagte parbo.
//jodi lagate pari ki kore lagabo.

// for (const key of map) {
//     console.log(key) 
// }
//the above syntax format give me the whole array.
//Now i dstructure 
for (const [key, value] of map) {
    // console.log(key, ":-", value) 
}


//Jodi amader kache obj thakto amar ki for-of loop lagate partam.
const myObj  = {
    name:"Debu", 
    isStudent:true, 
    clgName:"BIT", 

}
// for(const [key, value] of myObj){  //HERE ,for-of Loop is't for OBJ.is not iterable
//     console.log(key ,":-", value)
// }





//++++++++++++++++++++++++++++++++ FOR-IN-LOOP ++++++++++++++++++++++++++++++++++++++


//Define another obj.
const info = {
    js:"Java Script", 
    cpp:"C++", 
    rb:"Ruby", 
    java:"Java"
}
//Lopp in obj to print.
for (const key in info) {
    // console.log(`${key} Shortcut is from ${info[key]}`)
}

//For in Loop ki ami Array Te lagte parbo.
const arr2 = [12, 34, 5,55, 565]
for (const num in arr2) {
    // console.log(num)  //here print the index || keys    not values.
    //you have to write
    // console.log(arr2[num])
}



//++++++++++++++++++++++++++++++++ FOR-EACH-LOOP ++++++++++++++++++++++++++++++++++++++
const coding = ["Java", "JavaScript", "Ruby", "Python", "c++"]

coding.forEach( (val) =>{
    // console.log(val)
})


coding.forEach( (item, index, arr) =>{
    // console.log(item, index, arr)
})



//first define a array and inside array define objects.
const myCoding = [
    {
        languageName:"JavaScript", 
        languageFileName:"js "
    }, 
    {
        languageName:"C++", 
        languageFileName:"cpp "
    }, 
    {
        languageName:"Java", 
        languageFileName:"java "
    }

]
myCoding.forEach( (obj) =>{
    console.log(obj.languageFileName)
} )
