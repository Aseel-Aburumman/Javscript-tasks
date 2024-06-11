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

let usernamevalid = false;
let emailvalid = false;
let mobilevalid = false;
let passvalid = false;
let passvalid2 = false;

form.addEventListener("input", thevalidation_process);
function thevalidation_process() {
  let usernamevalue = username.value;
  let usernamevalidation_result = usernamevalidation.test(usernamevalue);

  if (usernamevalue === "") {
    usernameerror.style.color = "red";
    usernamevalid = false;

    usernameerror.innerHTML = "this feild is required";
  } else if (usernamevalidation_result) {
    usernameerror.style.color = "green";
    usernamevalid = true;

    usernameerror.innerHTML = "this is perfect";
  } else {
    usernameerror.style.color = "red";
    usernamevalid = false;

    usernameerror.innerHTML = "this is not valid username format ";
  }

  let emailvalue = email.value;
  let emailvalidation_result = emailvalidation.test(emailvalue);

  if (emailvalue === "") {
    emailerror.style.color = "red";
    emailvalid = false;

    emailerror.innerHTML = "this feild is required";
  } else if (emailvalidation_result) {
    emailerror.style.color = "green";
    emailvalid = true;

    emailerror.innerHTML = "this is perfect";
  } else {
    emailerror.style.color = "red";
    emailvalid = false;

    emailerror.innerHTML = "this is not valid email format ";
  }

  let mobilevalue = mobile.value;
  let mobilevalidation_result = mobilevalidation.test(mobilevalue);

  if (mobilevalue === "") {
    mobileError.style.color = "red";
    mobilevalid = false;
    mobileError.innerHTML = "this feild is required";
  } else if (mobilevalidation_result) {
    mobileError.style.color = "green";
    mobilevalid = true;

    mobileError.innerHTML = "this is perfect";
  } else {
    mobileError.style.color = "red";
    mobilevalid = false;

    mobileError.innerHTML =
      "this is not valid number , make sure its start with 077 and contain 10 diget";
  }

  let Passwordvalue = Password.value;
  let Passwordvalidation_result = Passwordvalidation.test(Passwordvalue);

  if (Passwordvalue === "") {
    PasswordError.style.color = "red";
    passvalid = false;
    PasswordError.innerHTML = "this feild is required";
  } else if (Passwordvalidation_result) {
    PasswordError.style.color = "green";
    passvalid = true;
    PasswordError.innerHTML = "this is perfect";
  } else {
    PasswordError.style.color = "red";
    passvalid = false;
    PasswordError.innerHTML =
      "this is not strong Password , make sure its  Between 6 and 18 characters, has at least one special character, has at least one lowercase letter, one uppercase letter, and one digit  ";
  }

  let Passwordvalue2 = Password2.value;

  if (Passwordvalue2 === "") {
    PasswordError2.style.color = "red";
    passvalid2 = false;
    PasswordError2.innerHTML = "this feild is required";
  } else if (Passwordvalue2 === Passwordvalue) {
    PasswordError2.style.color = "green";
    passvalid2 = true;
    PasswordError2.innerHTML = "good job ";
  } else {
    PasswordError2.style.color = "red";
    passvalid2 = false;
    PasswordError2.innerHTML = "passwords do not match ";
  }

  let alertShown = false;
  let thesubmitBtn = document.getElementById("submitBtn");
  thesubmitBtn.addEventListener("click", submitTheData);
  function submitTheData() {
    event.preventDefault();
    if (usernamevalid && passvalid && mobilevalid && emailvalid && passvalid2) {
      const userObj = {
        username: usernamevalue,
        email: emailvalue,
        Password: Passwordvalue,
        mobile: mobilevalue,
      };
      localStorage.setItem("user", JSON.stringify(userObj));
    } else {
    }
  }
}
