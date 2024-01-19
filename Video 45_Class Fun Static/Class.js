//ES6

/*class user{

    //constructor
    constructor(username, email, pass){
        this.username = username
        this.email = email
        this.pass = pass
    }
    //write a methord 
    encryptPassword(){
        return `${this.pass}adsbwudw39889574htpps://dscsd`
    }
    changeUserName(){
        return `${this.username.toUpperCase()}`
    }
}

//make a object
const user1 = new user("akd", "ad999@gmail.com", "8090")
console.log(user1.encryptPassword())
console.log(user1.changeUserName())

*/



//Behind the scene.
function user(username, email, pass){
        this.username = username
        this.email = email
        this.pass = pass
}
Object.prototype.encryptPassword  = function(){
    return `${this.pass}adsbwudw39889574htpps://dscsd`
}
Object.prototype.changeUserName  = function(){
    return  `${this.username.toUpperCase()}`
}

const user2 = new user("Rohit", "rho123@gmail.com", "113rd")
console.log(user2.encryptPassword())
console.log(user2.changeUserName())