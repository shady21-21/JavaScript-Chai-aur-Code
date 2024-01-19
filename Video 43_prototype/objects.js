//In JS function is also be an Object.
function multiplyby5(num){
    return num*5
}
multiplyby5.power = 2
console.log(multiplyby5(5))
console.log(multiplyby5.power)
console.log(multiplyby5.prototype)


function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++
}
createUser.prototype.printMe = function(){
    console.log(`Username is ${this.username}`)
    console.log(`Score is ${this.score}`)
}

const user1 = new createUser("Debu", 77)
const user2 = new createUser("Akd", 108)

user1.printMe()