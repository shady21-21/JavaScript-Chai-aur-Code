//Reduce Methord.
// const myNum = [1, 2, 3]

// const totalNum  = myNum.reduce(function(acc, currVal){ //acc stand for --> accumelator
//     console.log(`Acc value is ${acc} and CurrVal is ${currVal}`)
//     return acc+currVal
// }, 0) //here 0 is acc value.
// console.log(totalNum)

// const totalNum = myNum.reduce((acc, currVal) => acc+currVal,0)
// console.log(totalNum)


const shoppingCart= [
    {
        itemName:"js Course", 
        price :999
    },
    {
        itemName:"Java" ,
        price :3999
    },
    {
        itemName:"C++", 
        price :2999
    },
];

// write a down a functionality to add all the course prices.

const priceToPay = shoppingCart.reduce((acc, item) =>{
    return acc + item.price
}, 0) //default accumulator 0 pass korbo.

console.log(priceToPay)

// const priceToPay = shoppingCart.reduce((acc,item) => acc + item.price, 0 )
// console.log(priceToPay)