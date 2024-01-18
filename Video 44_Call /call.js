function setUsername(username){
    this.username = username
}

function createUser(username, email, password){
    // setUsername(username) //this function only called the ref..
    //this is slove useing a explicitly.
    setUsername.call(this,username)
    this.email = email
    this.password = password
}

//creating Object .
const User1 = new createUser("Debu", "debapriyo00@gmail.com", "1234")
console.log(User1);