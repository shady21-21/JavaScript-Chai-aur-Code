const promiseOne = new Promise((resolve, reject)=>{
    //do async task
    //db call , cryptography , network call

    setTimeout(()=>{
        console.log(`Async Task is Complete..`)
        resolve() //this resolve function is connected with .then 
    },1000)
})

//promise jehertu create hoyaga6e ota k consume koete hobe.
promiseOne.then(()=>{//.then er connection ache resolve er sathe
    console.log(`Promise consumed.`)
})   


//Ami akata notun promise banabo.
// just uporer syntax ta amai varriable store kore kore6i 
//eta te combine kore diya6i.
new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log(`Async Task 2..`)
        resolve()
    }, 1000)
}).then(()=>{
    console.log(`Async 2 Resolved..`)
})


const promiseThree = new Promise((resolve, reject)=>{
    setTimeout(() => {
        console.log(`Async Task 3`)
        resolve( //ami resolve object pass kore diya66i kintu .then obj data ta nubo ki kore?
            {
              username:"debu", 
              email:"debu99@gmail.com"  
            })
    }, 1000);
})
promiseThree.then((userInfo)=>{ 
    console.log(userInfo)
})

//Summary: Ami resolve a parameter a ja pass korbo seta .then parameter a user
//korte parbo.



//Promise 4.
const promiseFour = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let error = true
        if(!error){
            resolve(
                {
                    username:"Debu",
                    password:"123#"
                })
        }else{
            reject('ERROR: Something went Wrong!')
        }
    }, 1000)
})
//now fullfill the promise.
promiseFour.then((userInfo)=>{  //this concept name as Channing
    return userInfo.username
}).then((username)=>{
    console.log(username)
}).catch((err)=>{
    console.log(err)
}).finally(()=>{ //this block must be excuted.
    console.log(`The Promise is either Resolve or Rejected.`)
})



// Creating Promise Five.
const promiseFive = new Promise((resolve, reject)=>{
    setTimeout(() => {
        let error = true
        if(!error){
            resolve(
                {
                    username:"Java Script",
                    password:"123"
                })
        }else{
            reject('ERROR:JS went Wrong!')
        }
    }, 1000);
})

//sO ami ey promise ta k ".then() and .catch()" diuyau handel korte pari
//ba "async and await " diyau handel krote pari.

const consumePromiseFive = async ()=>{
    try {
        const response = await promiseFive
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}
consumePromiseFive()



//get my Github details from api
const gitHubDetails = async ()=>{
   try {
    const response = await fetch('https://api.github.com/users/debapriyo007')
    //convert korbi response string to JSON format a
    const githubInfo = await response.json() 
    //akhane await laga6i karon string theke JSON a convert korte time lag6e 
    console.log(githubInfo)
   } catch (err) {
    console.log(`ERROR : ${err}`)
   }
}
//call the async function.
// gitHubDetails()


//Same thing Do useing .then() .catch.()
//fetch function ki korbe ? -> akta amake promise return korbe.
fetch('https://api.github.com/users/debapriyo007')
//jodi promise return kore ki korbo? -> .then()
.then((res)=>{
    return res.json()
}).then((data)=>{ //response a JSON format a data tho pathiya diya6e, ota k ay .then() diay handel korbo
    console.log(data)
})
//jodi promise na fulfill kore ? -> .catch() diya handel korbo
.catch((err)=>{
    console.log(`ERROR: ${err}`)
}).finally(()=>{
    console.log(`Your Promise either fulfil or not!`)
})


