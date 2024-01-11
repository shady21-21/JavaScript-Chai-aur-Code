const nums = [1, 2, 3, 4,5 ,6, 7, 8, 9, 10]

//sob number er sathe 10 add korbo.
// const newNum = nums.map( (num) =>{
//     return num+10
// })


//Concept of Channing..
const newNum = nums
                .map((num) =>{return num * 10})
                .map((num)=>{return num+1})
                .filter((num) =>{return  num>=40})
console.log(newNum)