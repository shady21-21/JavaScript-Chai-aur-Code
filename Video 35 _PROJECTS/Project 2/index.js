const form = document.querySelector('form')

//stop the form default action
form.addEventListener('submit', (event)=>{
    event.preventDefault() //stop my deafult action.

    //get height and weight.
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#results')

    if(height == "" || height<0 || isNaN(height)){
        result.innerHTML = `Please Enter a valid Height ${height} `
    }else if(weight == "" || weight<0 || isNaN(weight)){
        result.innerHTML = `Please Enter a valid weight ${weight} `
    }else{
        const bmi = (weight/((height*height)/10000)).toFixed(2) //BMI Calculate formula
        let message = ''

        // Determine the message based on the BMI value
        if(bmi<18.6){
            message = 'Under Weight'
        }else if(bmi>=18.6 && bmi<=24.9){
            message = 'Normal Range'
        }else{
            message = 'Over Weight'
        }

        // Show the result
        result.innerHTML = `<span> Your BMI: ${bmi}</span><p>${message}</p>`
    }
    
})