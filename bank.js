document.getElementById('submit-btn').addEventListener('click',function(){
    const emailField =document.getElementById('user-email').value
    // get password 
    const passField =document.getElementById('user-password').value

    if(emailField =='sontan@gmail.com' && passField =='yourpass')
    window.location.href ='banking.html'
})

