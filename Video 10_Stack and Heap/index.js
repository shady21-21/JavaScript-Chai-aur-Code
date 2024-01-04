//Stack Memory(Premetive Data Type) and Heap Memory(Non-Premetive Data Type).

//here you use online tool which is "Exclaidraw"

let myEmail = "debu07@gmail.com"
let mySecondEmail = myEmail
mySecondEmail = "akd99@gmail.com"
console.log(myEmail);
console.log(mySecondEmail);
//The above portion we will get copies not ref for "Premetive Data Type.".

let user = {
    email:"akash77@gmail.com", 
    upi:"user@paytm", 

}
/*
here in stack user2 is created but this user2 does't create
new obj in heap is't ref same object user.*/
let user2 = user 
user2.email = "raa999@gmail.com"
console.log(user.email);
console.log(user2.email);