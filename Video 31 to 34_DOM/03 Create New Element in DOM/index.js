//First work is to select parent element se what value is there.
const parent = document.querySelector('.parent')
console.log(parent)
console.log(parent.children) //this line show HTML Collection
console.log(parent.children[0]) // access monday div.
// console.log(parent.children[0].innerHTML) //output -> Monday.



//Print all days.
for(let i = 0;i<parent.children.length;i++){
    console.log(parent.children[i].innerHTML)
}
parent.children[0].style.color = 'orange'
parent.children[2].style.color = 'green'

//access direct first and last element.
console.log(parent.firstElementChild)
console.log(parent.lastElementChild) //access last element.

//upore amar ki kor6i parent theke child a jacchi.
//but amara child theke parent o move korte pari.
const dayOne = document.querySelector('.day')
console.log(dayOne)
console.log(dayOne.parentElement)
console.log(dayOne.nextElementSibling)

//NOde List Concept.
console.log("NODES", parent.childNodes)
