class User {
    constructor(email, password){
        this.email = email
        this.password = password
    }
    get password(){
        return this._password.toUpperCase()
    }
    set password(pass){
        this._password = pass
    }
}

const debuUser = new User("debu99@gmail.com", "dddd7")
console.log(debuUser.password)
