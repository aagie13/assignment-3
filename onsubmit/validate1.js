function validateForm() {
    let valid = true;

    // Username validation
    let username = document.getElementById('username1').value;
    let nameError = document.getElementById('nameError1');
    if (username === "") {
        nameError.textContent = "Username is required.";
        valid = false;
    } else {
        nameError.textContent = "";
    }

    // Password validation
    let password = document.getElementById('password1').value;
    let confirmPassword = document.getElementById('confirmPassword1').value;
    let passwordError = document.getElementById('passwordError1');
    let confirmPasswordError = document.getElementById('confirmPasswordError1');
    
    if (password === "") {
        passwordError.textContent = "Password is required.";
        valid = false;
    } else {
        passwordError.textContent = "";
    }
    
    if (confirmPassword === "") {
        confirmPasswordError.textContent = "Please confirm your password.";
        valid = false;
    } else if (password !== confirmPassword) {
        confirmPasswordError.textContent = "Passwords do not match.";
        valid = false;
    } else {
        confirmPasswordError.textContent = "";
    }

    // Date of Birth validation
    let dob = document.getElementById('dob1').value;
    let dobError = document.getElementById('dobError1');
    if (dob === "") {
        dobError.textContent = "Date of Birth is required.";
        valid = false;
    } else {
        dobError.textContent = "";
    }

    // Email validation
    let email = document.getElementById('email1').value;
    let emailError = document.getElementById('emailError1');
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (email === "") {
        emailError.textContent = "Email is required.";
        valid = false;
    } else if (!email.match(emailPattern)) {
        emailError.textContent = "Invalid email format.";
        valid = false;
    } else {
        emailError.textContent = "";
    }

    // Gender validation
    let gender = document.querySelector('input[name="gender"]:checked');
    let genderError = document.getElementById('genderError1');
    if (!gender) {
        genderError.textContent = "Please select your gender.";
        valid = false;
    } else {
        genderError.textContent = "";
    }

    // Country validation
    let country = document.getElementById('country1').value;
    let countryError = document.getElementById('countryError1');
    if (country === "") {
        countryError.textContent = "Please select your country.";
        valid = false;
    } else {
        countryError.textContent = "";
    }

    return valid;  // Prevent form submission if invalid
}
