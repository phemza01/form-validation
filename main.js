function getname(){
    let name = document.getElementById('name').value
    let error = "";
    let validname=""

    if (name ==""){
        error = "Your name is required"
        validname=""
    }else if(name.length < 10){
        error = "invalid name"
        validname=""
    }else{
        validname=name
    }
document.getElementById('nameError').innerHTML = error;
document .getElementById('validatename').value= validname;
}

function getnumber(){
    let phone = document.getElementById('phone').value
    let error = ""
    let validphone="" 

    if (phone == ""){
        error= "Your phone number is required"
        validphone=""
    }
    else if (phone.length !=11){
        error= "invalid phone number"
        validphone =''
    }else{
        validphone = phone
    }
    document.getElementById('phoneError').innerHTML = error;
document .getElementById('validatephone').value= validphone;
}

function getemail(){
    let email = document.getElementById('email').value
    let error = ""
    let validemail="" 

    if (email == ""){
        error= "Your Email is required"
        validemail=""
    }
    else if (email.includes('@')== false || email.includes('.') == false){
        error= "invalid email"
        validemail =''
    }else{
        validemail = email
    }
    document.getElementById('emailError').innerHTML = error;
document .getElementById('validateemail').value= validemail;
}

function getpassword(){
    let password = document.getElementById('Password').value;
    let error = ""
    let validpassword="" 

    if (password == ""){
        error= "Your password is required"
        validpassword=""
    }
    else if (password == "password"){
        error= "you can't use \"password\" as your password";
        validpassword =''
    }
    else if( password.length <8){
         error= "Your passowrd must exceed 8 characters"
         validpassword=""
    }else{
        validpassword = password
    }
    document.getElementById('passwordError').innerHTML = error;
}


function getconfirmpassword(){
    let confirmpassword = document.getElementById('confirmpassword').value;
    let error = ""
    let validconfirmpassword="" 

    if (confirmpassword == ""){
        error= "confirm password is required"
        validconfirmpassword=""
        
    }else if( document.getElementById('Password').value != confirmpassword){
         error= "password is not matched";
         validpassword=""
    }else{
        error= "password is matched";
        
    }
    document.getElementById('confirmpasswordError').innerHTML = error;
}