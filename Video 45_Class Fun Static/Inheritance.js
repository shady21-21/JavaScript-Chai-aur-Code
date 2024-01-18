class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`My UserName is ${this.username} i already log in.`)
    }
}

//If you build an eCom website then we will make this user 
//sometime "Teacher", "Admin" etc

class Teacher extends User{
    //override the constructor.
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourses(){
        console.log(`This Couser is Add by ${this.username}`)
    }
}

const Teacher1 = new Teacher("Virat Kohli", "kohli00@gmail.com", "idontknow0")
Teacher1.logMe()
Teacher1.addCourses()

const user1 = new User("debu")
user1.logMe()

//there is a function to check instance or not 
console.log(Teacher1 instanceof Teacher) //give true becoz it's is.
console.log(Teacher1 instanceof User) //give true becoz it's is.
