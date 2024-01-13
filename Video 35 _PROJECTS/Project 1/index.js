//first select all buttons.
const allbutton = document.querySelectorAll('.button')
// console.log(allbutton)
const body =  document.querySelector('body')

allbutton.forEach((btn) =>{
     console.log(btn)
    btn.addEventListener('click', (event) => {
        // console.log(event);
        // console.log(event.target);
       /*  switch (event.target.id) {
            case 'orange':
                body.style.backgroundColor = event.target.id;
                break;
            case 'white':
                body.style.backgroundColor = event.target.id;
                break;
            case 'green':
                body.style.backgroundColor = event.target.id;
                break;
            case 'skyblue':
                body.style.backgroundColor = event.target.id;
                break;
            default:
                break;
        }*/


        if(event.target.id === 'orange'){
            body.style.backgroundColor = event.target.id
        }
        if(event.target.id === 'white'){
            body.style.backgroundColor = event.target.id
        }
        if(event.target.id === 'green'){
            body.style.backgroundColor = event.target.id
        }
        if(event.target.id === 'skyblue'){
            body.style.backgroundColor = event.target.id
        }
    });
})
