username.onchange = (event) => {
    let pattern = /^[A-Za-z]{5,20}$/
    let errorMessage = 'Name should contains only alphabets'   
    validateInput(event.target,pattern,errorMessage)
}

email.onchange = (event) => {
    let pattern = /^[A-Za-z0-9.]{5,}@[A-Za-z]{2,}\.[A-Za-z]{2,}$/
    let errorMessage = "Email address should in 'mail@website.com' format"
    validateInput(event.target,pattern,errorMessage)
}

newpassword.onchange = (event) => {
    let pattern = /(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{6,16}/
    let errorMessage = "Password should contains a uppercase, a lower case, a number and a special character"
    validateInput(event.target,pattern,errorMessage)
}

confirmpassword.onchange = (event) => {
    let pattern = RegExp(newpassword.value)
    let errorMessage = "Both the passwords should be same"
    validateInput(event.target,pattern,errorMessage)
}

function validateInput(input,pattern,errorMessage)
{
    if(pattern.test(input.value))
        input.nextElementSibling.textContent = ''
    else
        input.nextElementSibling.textContent = errorMessage
}

btn.onclick = (event) => {
    let inputFields = document.getElementsByClassName('inputfields')
    var flag = true
    console.log(flag)
    for(i=0;i<inputFields.length;i++)
    {
        input = inputFields[i].firstElementChild.nextElementSibling
        error = inputFields[i].lastElementChild
        if(input.value == '')
            error.textContent = 'Please fill in this field'
        if(error.textContent != '')
            flag = false
    }
    console.log(flag)
    if(flag == true)
    {
        localStorage.setItem('username',email.value)
        localStorage.setItem('password',newpassword.value)
        form1.submit()
    }
}