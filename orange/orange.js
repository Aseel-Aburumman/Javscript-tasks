let form = document.getElementById("theform");

let username = document.getElementById("exampleInputusername");
let usernameerror = document.getElementById("usenameHelp");
let usernamevalidation = /^(?=[\w.-]{5,20}$)(?:[\d_.-]*[a-zA-Z]){3}[\w.-]*$/;

let email = document.getElementById("exampleInputEmail1");
let emailerror = document.getElementById("emailHelp");
let emailvalidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

let mobile = document.getElementById("exampleInputmobile");
let mobileError = document.getElementById("mobHelp");
let mobilevalidation = /^077\d{7}$/;

let Password = document.getElementById("exampleInputPassword1");
let PasswordError = document.getElementById("passHelp");
let Passwordvalidation =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{6,18}$/;

let Password2 = document.getElementById("exampleInputPassword2");
let PasswordError2 = document.getElementById("passHelp2");

let thecheck = document.getElementById("exampleCheck1");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let usernamevalid = validateUsername();
  let emailvalid = validateEmail();
  let mobilevalid = validateMobile();
  let passvalid = validatePassword();
  let passvalid2 = validateConfirmPassword();

  if (usernamevalid && emailvalid && mobilevalid && passvalid && passvalid2) {
    const userObj = {
      username: username.value,
      email: email.value,
      Password: Password.value,
      mobile: mobile.value,
    };
    localStorage.setItem("user", JSON.stringify(userObj));
  }
});

function validateUsername() {
  let usernamevalue = username.value;
  let usernamevalidation_result = usernamevalidation.test(usernamevalue);

  if (usernamevalue === "") {
    usernameerror.style.color = "red";
    usernameerror.innerHTML = "this field is required";
    return false;
  } else if (usernamevalidation_result) {
    usernameerror.style.color = "green";
    usernameerror.innerHTML = "this is perfect";
    return true;
  } else {
    usernameerror.style.color = "red";
    usernameerror.innerHTML = "this is not valid username format";
    return false;
  }
}

function validateEmail() {
  let emailvalue = email.value;
  let emailvalidation_result = emailvalidation.test(emailvalue);

  if (emailvalue === "") {
    emailerror.style.color = "red";
    emailerror.innerHTML = "this field is required";
    return false;
  } else if (emailvalidation_result) {
    emailerror.style.color = "green";
    emailerror.innerHTML = "this is perfect";
    return true;
  } else {
    emailerror.style.color = "red";
    emailerror.innerHTML = "this is not valid email format";
    return false;
  }
}

function validateMobile() {
  let mobilevalue = mobile.value;
  let mobilevalidation_result = mobilevalidation.test(mobilevalue);

  if (mobilevalue === "") {
    mobileError.style.color = "red";
    mobileError.innerHTML = "this field is required";
    return false;
  } else if (mobilevalidation_result) {
    mobileError.style.color = "green";
    mobileError.innerHTML = "this is perfect";
    return true;
  } else {
    mobileError.style.color = "red";
    mobileError.innerHTML =
      "this is not valid number, make sure it starts with 077 and contains 10 digits";
    return false;
  }
}

function validatePassword() {
  let Passwordvalue = Password.value;
  let Passwordvalidation_result = Passwordvalidation.test(Passwordvalue);

  if (Passwordvalue === "") {
    PasswordError.style.color = "red";
    PasswordError.innerHTML = "this field is required";
    return false;
  } else if (Passwordvalidation_result) {
    PasswordError.style.color = "green";
    PasswordError.innerHTML = "this is perfect";
    return true;
  } else {
    PasswordError.style.color = "red";
    PasswordError.innerHTML =
      "this is not a strong password, make sure it's between 6 and 18 characters, has at least one special character, one lowercase letter, one uppercase letter, and one digit";
    return false;
  }
}

function validateConfirmPassword() {
  let Passwordvalue = Password.value;
  let Passwordvalue2 = Password2.value;

  if (Passwordvalue2 === "") {
    PasswordError2.style.color = "red";
    PasswordError2.innerHTML = "this field is required";
    return false;
  } else if (Passwordvalue2 === Passwordvalue) {
    PasswordError2.style.color = "green";
    PasswordError2.innerHTML = "good job";
    return true;
  } else {
    PasswordError2.style.color = "red";
    PasswordError2.innerHTML = "passwords do not match";
    return false;
  }
}
