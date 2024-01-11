// const coding = ["java", "js", "c++", "Rust"]

// coding.forEach( (language) =>{
//     // console.log(language)
// })

//This is normal loop what happen if i store this in a varriable.
// const values = coding.forEach( (language) =>{
//     // console.log(language)
// })
// console.log(values)
//here get return "undefine"
//means, For each loop does't return any value.


const nums = [1,2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = nums.filter((num) =>(num>4))
// const newNums =nums.filter( (num) =>{
//     return num>4  //if i define scope in call back function then return must be needed.
// })
// console.log(newNums)


// const newNums = []
// nums.forEach( (num) =>{
//     if(num>4){
//         newNums.push(num )
//     }
// })
// console.log(newNums)

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBook = books.filter( (bk) =>{
    return bk.genre === 'History'
  })

  //sey sob book gulo k print korbo jey gulo 2000 sal er por publish hoya6e.
  userBook = books.filter((bk) =>{
     return bk.publish >= 2000
  })

  userBook = books.filter((bk) =>{
    return bk.publish >= 1995 && bk.genre === 'History'
 })
  console.log(userBook)