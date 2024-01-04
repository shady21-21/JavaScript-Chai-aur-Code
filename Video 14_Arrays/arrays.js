const arr =[11, 23, 54, 667, 0]
const myHeros = ["IronMan", "Captain America", "Thor"]
//console.log(arr[0])

//define array another way.
const anotherArr = new Array(1, 2, 3, 4, 5)

//array Methord.
anotherArr.push(6)
anotherArr.push(7)

anotherArr.pop() //not take any args simpily remove last value in array.

anotherArr.unshift(99) //it's push always at 0 index .
anotherArr.shift() //it's always remove the 0'th index value


//Some Operations.
//console.log(anotherArr.includes(88))
//console.log(anotherArr.indexOf(5))

// console.log(anotherArr)

//Some Operations.
const newArray = anotherArr.join()
// console.log(anotherArr)
// console.log(newArray)


//++++++++++++++++++++++++ SLICE AND SPLICE ++++++++++++++++++++++++++++++++++++
const myArr = [0, 1, 2, 3, 4, 5]
console.log("A ", myArr)
const myn1 = myArr.slice(1,3) //include 1st and 2nd not 3rd.(DOES'T MANAPULATE THE ORIGINAL ARRAY.)
console.log(myn1)
console.log("B ", myArr)

const myn2 = myArr.splice(1,3); //IT'S MANAPULATE THE ORIGINAL ARRAY.
console.log("C ", myArr)
console.log(myn2)

