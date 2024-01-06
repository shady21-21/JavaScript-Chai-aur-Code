//Nested Scope.

function one(){
    const username = "debu"

    function two(){
        const website = "youtube"
        // console.log(username) //can we use the username 
    }
    // console.log(website) //can we use the website
    two()
}
one()

// summary : amar vitore fun gulo bayrer varriable gulo k access korte parbe. --> ata k clouser o bole. 


if(true){
    const user = "akash"
    if(user == "akash"){
        const platfrom = " youtube"
        // console.log(user + platfrom)
    }
    // console.log(platfrom) // gives u error coz user scope is between the parenthesis.
}
// console.log(user) //also give u error coz it's scope is between the parenthesis.


//+++++++++++++++++++++++++++++++ Intersting ++++++++++++++++++++++++++++

//create a fun.
console.log(addOne(3))
function addOne(num){
    return num+1
}

//amara jodi uporer motot kore fun k declear kori - thahole amar fun k jekhna theke khusi call korte parbo.

// console.log(addTwo(3))  //here if you call then give u error. coz u can't call there before intitilization.
const addTwo = function(num){
    return num+2
}
console.log(addTwo(3)) // akhane ata run kore jabe.but jodi amara upore , mane function ta define korar age jodi kothau call kori error asbe.
