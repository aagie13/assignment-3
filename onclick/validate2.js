function validateform2(){
    let valid = true;
    
    let username = document.getElementById('username2').value;
    let nameError = document.getElementById('nameError2');

    if (username === ""){
        nameError.textContent = "Username is required";
        valid = false;
    }
    else{
        nameError.textContent = "";
    }
    
    let password = document.getElementById('password2').value;
    let confirmPassword = document.getElementById('confirmPassword2').value;
    let passwordError = document.getElementById('passwordError2');
    let confirmPasswordError = document.getElementById('confirmPasswordError2');

    if (password === ""){
        passwordError.textContent = "Password is required";
        valid = false;
    }else{
        passwordError.textContent = "";
    }

    if (confirmPassword === ""){
        confirmPasswordError.textContent = "Please confirm your password";
        valid = false;
    }
    else if (password !== confirmPassword){
        confirmPasswordError.textContent = "Passwords do not match";
        valid = false;
    }else{
        confirmPasswordError.textContent = "";
    }

    let dob = document.getElementById('dob2').value;
    let dobError = document.getElementById('dobError2');
    if (dob === ""){
        dobError.textContent = "Date of Birth is required";
        valid = false;
    }else{
        dobError.textContent = "";
    }

    let email = document.getElementById('email2').value;
    let emailError = document.getElementById('emailError2');
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (email === ""){
        emailError.textContent = "Email is required";
        valid = false;
    }else if(!email.match(emailPattern)){
        emailError.textContent = "Invalid email format";
        valid = false;
    }else{
        emailError.textContent = "";
    }

    let gender = document.querySelector('input[name="gender"]:checked');
    let genderError = document.getElementById('genderError2');
    if (gender === null){
        genderError.textContent = "Please select your gender";
        valid= false;
    }else{
        genderError.textContent = "";
    }

    let country = document.getElementById('country2').value;
    let countryError = document.getElementById('countryError2');
    if (country === ""){
        countryError.textContent = "Please select your country";
        valid = false;
    }else{
        countryError.textContent = "";
    }

    if (valid){
        alert("Form submitted successfully!");
    }else{
        alert("Please correct the errors in the form");
    }
}