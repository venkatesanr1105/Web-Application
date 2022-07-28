btn.onclick = (event) => {
    usrname = localStorage.getItem('username')
    pword =  localStorage.getItem('password')
    console.log(usrname)
    console.log(pword)
    console.log(username.value)
    console.log(password.value)
    if(username.value != usrname)    
        username.nextElementSibling.textContent = 'Invalid User name'
    else
        username.nextElementSibling.textContent = ''

    if(password.value != pword)
        password.nextElementSibling.textContent = 'Invalid Password'
    else
        password.nextElementSibling.textContent = ''       
    if(username.value == usrname && password.value == pword)
        form1.submit()
}