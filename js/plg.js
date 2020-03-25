const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
var flag1;
var flag2;
var flag3;
var flag4;
// var usercheck=/^[A-Za-z0-9. ]{3,30}$/;
// var passcheck=/^(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{3,30}$/;
// var mobcheck=/^[789][0-9]{9}$/;
// var mailcheck=/^[A-Za-z0-9_]{3,30}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;

/***************** Username Validate ********************/

username.addEventListener('blur', e => {
    const val = e.target.value;
    re = /[0-9]/;
    

    if (val === '') {
        $(".usernamee").addClass("errorinput").removeClass("successinput");
        $(".circleuser2").fadeIn().addClass("error");
        $(".circleuser1").fadeOut();
        $("#name").text("* Username cannot be blank *").fadeIn();
        $("#name").fadeIn().addClass("error");
        setErrorFor(username, '* Username cannot be blank *');
        flag1 = false;
    } else if (val.length > 40) {
        $(".usernamee").addClass("errorinput").removeClass("successinput");
        $(".circleuser2").fadeIn().addClass("error");
        $(".circleuser1").fadeOut();
        $("#name").text("* Your name is long *").fadeIn();
        $("#name").fadeIn().addClass("error");
        setErrorFor(username, '* Your name is long *');
        flag1 = false;
    } else if (val.length < 8) {
        $(".usernamee").addClass("errorinput").removeClass("successinput");
        $(".circleuser2").fadeIn().addClass("error");
        $(".circleuser1").fadeOut();
        $("#name").text("* Your name is short *").fadeIn();
        $("#name").fadeIn().addClass("error");
        setErrorFor(username, '* Your name is short *');
        flag1 = false;
    } else if (re.test(val)) {
        $(".usernamee").addClass("errorinput").removeClass("successinput");
        $(".circleuser2").fadeIn().addClass("error");
        $(".circleuser1").fadeOut();
        $("#name").text("* this field must be alphabets only *").fadeIn();
        $("#name").fadeIn().addClass("error");
        setErrorFor(username, '* this field must be alphabets only *');
        flag1 = false;
    } else {
        $(".usernamee").addClass("successinput");
        $("#name").fadeOut();
        $(".circleuser2").fadeOut();
        $(".circleuser1").fadeIn().addClass("success");
        setSuccessFor(username);
        flag1 = true;
    }

});

/***************** Email Validate ********************/

email.addEventListener('blur', e => {
    const val = e.target.value;

    if (val === '') {
        $(".eemail").addClass("errorinput").removeClass("successinput");
        $(".circleemail2").fadeIn().addClass("error");
        $(".circleemail1").fadeOut();
        $("#eemail").text("* Email cannot be blank *").fadeIn();
        $("#eemail").fadeIn().addClass("error");
        setErrorFor(email, '* Email cannot be blank *');
        flag2 = false;
    } else if (!isEmail(val)) {
        $(".eemail").addClass("errorinput").removeClass("successinput");
        $(".circleemail2").fadeIn().addClass("error");
        $(".circleemail1").fadeOut();
        $("#eemail").text("* This email is invalid *").fadeIn();
        $("#eemail").fadeIn().addClass("error");
        setErrorFor(email, '* Not a valid email *');
        flag2 = false;
    } else {
        $(".eemail").addClass("successinput");
        $("#eemail").fadeOut();
        $(".circleemail2").fadeOut();
        $(".circleemail1").fadeIn().addClass("success");
        setSuccessFor(email);
        flag2 = true;
    }
});

/***************** Phone Validate ********************/

phone.addEventListener('blur', e => {
    const val = e.target.value;

    if (val === '') {
        $(".phonee").addClass("errorinput").removeClass("successinput");
        $(".circlephone2").fadeIn().addClass("error");
        $(".circlephone1").fadeOut();
        $("#phonee").text("* Phone cannot be blank *").fadeIn();
        $("#phonee").fadeIn().addClass("error");
        setErrorFor(phone, '* Phone cannot be blank *');
        flag3 = false;
    } else if (val.length < 11) {
        $(".phonee").addClass("errorinput").removeClass("successinput");
        $(".circlephone2").fadeIn().addClass("error");
        $(".circlephone1").fadeOut();
        $("#phonee").text("* This phone number is invalid *").fadeIn();
        $("#phonee").fadeIn().addClass("error");
        setErrorFor(phone, '* This phone number is invalid *');
        flag3 = false;
    } else {
        $(".phonee").addClass("successinput");
        $("#phonee").fadeOut();
        $(".circlephone2").fadeOut();
        $(".circlephone1").fadeIn().addClass("success");
        setSuccessFor(phone);
        flag3 = true;
    }
});

/***************** Password Validate ********************/

password.addEventListener('blur', e => {
    const val = e.target.value;
    // re = /[0-9])/;
    if (val === '') {
        $(".psw").addClass("errorinput").removeClass("successinput");
        $(".circlepsw2").fadeIn().addClass("error");
        $(".circlepsw1").fadeOut();
        $("#psw").text("* Password cannot be blank *").fadeIn();
        $("#psw").fadeIn().addClass("error");
        setErrorFor(password, '* Password cannot be blank *');
        flag4 = false;
    } else if (val.length <= 8) {
        $(".psw").addClass("errorinput").removeClass("successinput");
        $(".circlepsw2").fadeIn().addClass("error");
        $(".circlepsw1").fadeOut();
        $("#psw").text("* your password must be at least 8 alphanumeric *").fadeIn();
        $("#psw").fadeIn().addClass("error");
        setErrorFor(password, '* your password must be at least 8 alphanumeric *');
        flag4 = false;
    } else {
        $(".psw").addClass("successinput");
        $("#psw").fadeOut();
        $(".circlepsw2").fadeOut();
        $(".circlepsw1").fadeIn().addClass("success");
        setSuccessFor(password);
        flag4 = true;
    }
});

/***************** Show and Hide Password Validate ********************/

function myFunction() {
    var x = document.getElementById("password");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

/***************** Password Validate Weak or Medium or strong ********************/

function validatePassword(password) {

    // Do not show anything when the length of password is zero.
    if (password.length === 0) {
        document.getElementById("msg").innerHTML = "";
        return;
    }
    // Create an array and push all possible values that you want in password
    var matchedCase = new Array();
    matchedCase.push("[_$@$!%*#?&]"); // Special Charector
    matchedCase.push("[A-Z]");      // Uppercase Alpabates
    matchedCase.push("[0-9]");      // Numbers
    matchedCase.push("[a-z]");     // Lowercase Alphabates

    // Check the conditions
    var ctr = 0;
    for (var i = 0; i < matchedCase.length; i++) {
        if (new RegExp(matchedCase[i]).test(password)) {
            ctr++;
        }
    }
    // Display it
    var color = "";
    var strength = "";
    switch (ctr) {
        case 0:
        case 1:
        case 2:
            strength = "Very Weak";
            color = "red";
            break;
        case 3:
            strength = "Medium";
            color = "orange";
            break;
        case 4:
            strength = "Strong";
            color = "green";
            break;
    }
    document.getElementById("msg").innerHTML = strength;
    document.getElementById("msg").style.color = color;
}
/***************** Form Submit ********************/
form.addEventListener('submit', e => {

    e.preventDefault();
    if (flag4 && flag3 && flag2 && flag1) {
        alert("Your Sign Up is Success")
    }
    else {
        alert("Your Sign Up is not Success")
        $(".usernamee").addClass("errorinput").removeClass("successinput");
        $(".circleuser2").fadeIn().addClass("error");
        $(".circleuser1").fadeOut();
        $("#name").text("* Username cannot be blank *").fadeIn();
        $("#name").fadeIn().addClass("error");
        setErrorFor(username, '* Username cannot be blank *');
        $(".eemail").addClass("errorinput").removeClass("successinput");
        $(".circleemail2").fadeIn().addClass("error");
        $(".circleemail1").fadeOut();
        $("#eemail").text("* Email cannot be blank *").fadeIn();
        $("#eemail").fadeIn().addClass("error");
        setErrorFor(email, '* Email cannot be blank *');
        $(".phonee").addClass("errorinput").removeClass("successinput");
        $(".circlephone2").fadeIn().addClass("error");
        $(".circlephone1").fadeOut();
        $("#phonee").text("* Phone cannot be blank *").fadeIn();
        $("#phonee").fadeIn().addClass("error");
        setErrorFor(phone, '* Phone cannot be blank *');
        $(".psw").addClass("errorinput").removeClass("successinput");
        $(".circlepsw2").fadeIn().addClass("error");
        $(".circlepsw1").fadeOut();
        $("#psw").text("* Password cannot be blank *").fadeIn();
        $("#psw").fadeIn().addClass("error");
        setErrorFor(password, '* Password cannot be blank *');
    }
    // checkInputs();
});

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

