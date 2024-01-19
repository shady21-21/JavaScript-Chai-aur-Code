class User {
    constructor(username){
        this.username = username
    }

    PrintMe(){
        console.log(`My UserName is ${this.username}`)
    }
    static createId(){ //if i write down the static key word infront of any fun the function deny to access him.
        return `112`
    }
}

const u1 = new User("debu")
console.log(u1.createId())