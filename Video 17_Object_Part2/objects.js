//Constructor Way

//const instUser = new Object() //this is singleton obj
// console.log(instUser)
const instUser ={ //non - singleton obj.

};
instUser.id = "dd099"
instUser.name = "debu"
instUser.isLogin = false
// console.log(instUser)

const regularUser = {
    email:"debu77@gmail.com", 
    fullname:{
        userfullName:{
            firstName:"Debu", 
            lastName:"Das",
        }
    }
};
// console.log(regularUser.fullname.userfullName.firstName)


//combine objects..
const obj1 = {
    1:"A", 
    2:"B"
}

const obj2 = {
    3:"A", 
    4:"B"
}
// const obj3 = {obj1 , obj2} //same happens what happens in arrays. Object inside object.
// const obj3 = Object.assign({}, obj1, obj2) //this is't use as much.

const obj3 = {...obj1, ...obj2} //this is sprade operator.
// console.log(obj3)


//When vaules are came from database.

const user = [  //when users are came from database thery are basically from of array.
    {
        id:1, 
        email:"xxxxxxx@gmail.com", 
    }, 
    {
        id:3, 
        email:"yyyyyyy@gmail.com",  
    },
    {
        id:4, 
        email:"zzzzzz@gmail.com",  
    },
    {
        id:5, 
        email:"ooooooooo@gmail.com",  
    }

];
// console.log(user[0].email)

console.log(instUser)
console.log(Object.keys(instUser)) //this will print all the key of instUser as a "Array" from
console.log(Object.values(instUser))