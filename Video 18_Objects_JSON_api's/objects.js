/* Destructuring..
 */

const course = {
    course:"JS Course in Hindi", 
    price:999, 
    courseInstructor:"xyz Teacher", 

}
// console.log(course.courseInstructor) //this is fine

//This is the more syntatical way.
const {courseInstructor:cIns} = course //this is called destructure
// console.log(courseInstructor)
console.log(cIns)
// https://api.github.com/users/debapriyo007

//Api's is't always from of Object it may be form of an Array.

