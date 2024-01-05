const marvelHeros =["IronMan", "SpiderMan", "Thord"]
const DcSupperHeros = ["SuperMan", "BatMan", "Flash"]

//marvelHeros.push(DcSupperHeros)
//console.log(marvelHeros) //here shows array inside array.
// [ 'IronMan', 'SpiderMan', 'Thord', [ 'SuperMan', 'BatMan', 'Flash' ] ]
//this is my output here take dcSuperHeros as an data or u can say element.

//merge two array.
// const allHeros = marvelHeros.concat(DcSupperHeros) //it's always return a new array.
// console.log(allHeros)

//In place of concat we are using sprade operator.
const allHeros = [...marvelHeros, ...DcSupperHeros]
console.log(allHeros)

const anotherArr = [1, 2, 3,[4, 5, 6], 7, [8, 9, [10, 11]]]
const realAnotherArr = anotherArr.flat(Infinity)
console.log(realAnotherArr)

//check array or not ?
console.log(Array.isArray("Debu"))  //false
console.log(Array.isArray(realAnotherArr)) //true
console.log(Array.from("Debu"))  //convert into array.
console.log(Array.from({name:"akd"})) //it will give u empty array.


let score = 100
let score2 = 200
let score3 = 300
//convert all this sctore into array.
console.log(Array.of(score, score2,score3))


