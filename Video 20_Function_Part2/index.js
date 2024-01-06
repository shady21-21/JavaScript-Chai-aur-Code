
//calculate the cart price.

function calculateCartPrice(...product1){ //... called "Rest Operator" and Sprade Operator.
    return product1
}
console.log(calculateCartPrice(120, 200, 400, 990))

//make a object.
const phone = {
    name:"Samsung", 
    price:1999
}

//create function that print Product deatils.
function printProductDetails(anyObj){
    console.log(`The product name is ${anyObj.name} and price is ${anyObj.price}`)
}

//call the func.
// printProductDetails(phone)
printProductDetails({
    name:"nokie", 
    price: 2000
})

//pass array in func.
const myarr = [200, 400, 100, 600]
//write down a fun who return the second value of the array.
function returnsecondValue(arr){
    return arr[2]
}

//call the funtion.
console.log("Array Second value is:",returnsecondValue(myarr))