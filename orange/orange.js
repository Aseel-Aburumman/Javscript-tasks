let form = document.getElementById("theform");


let email = document.getElementById("exampleInputEmail1");
let emailerror = document.getElementById("emailHelp");
let emailvalidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

let mobile = document.getElementById("exampleInputmobile");
let mobileError = document.getElementById("mobHelp");
let mobilevalidation = /^077\d{7}$/;

let Password = document.getElementById("exampleInputPassword1");
let PasswordError = document.getElementById("passHelp");
let Passwordvalidation = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{6,18}$/;

let emailvalid = false;
let mobilevalid = false;
let passvalid = false;

form.addEventListener("input", thevalidation_process);
function thevalidation_process(){
    let emailvalue = email.value;
    let emailvalidation_result = emailvalidation.test(emailvalue);

    if (emailvalue ===''){
        emailerror.style.color= "red";
         emailvalid = false;

        emailerror.innerHTML= "this feild is required";
    } else if (emailvalidation_result){
        emailerror.style.color= "green";
         emailvalid = true;

        emailerror.innerHTML= "this is perfect";
    }else {
        emailerror.style.color= "red";
         emailvalid = false;

        emailerror.innerHTML= "this is not valid email format ";
    }


    let mobilevalue = mobile.value;
    let mobilevalidation_result = mobilevalidation.test(mobilevalue);

    if (mobilevalue ===''){
        mobileError.style.color= "red";
         mobilevalid = false;
        mobileError.innerHTML= "this feild is required";
    } else if (mobilevalidation_result){
        mobileError.style.color= "green";
         mobilevalid = true;

        mobileError.innerHTML= "this is perfect";
    }else {
        mobileError.style.color= "red";
         mobilevalid = false;

    mobileError.innerHTML= "this is not valid number , make sure its start with 077 and contain 10 diget";
}


    let Passwordvalue = Password.value;
    let Passwordvalidation_result = Passwordvalidation.test(Passwordvalue);

    if (Passwordvalue ===''){
        PasswordError.style.color= "red";
         passvalid = false;
        PasswordError.innerHTML= "this feild is required";
    } else if (Passwordvalidation_result){
        PasswordError.style.color= "green";
         passvalid = true;
        PasswordError.innerHTML= "this is perfect";
    }else {
        PasswordError.style.color= "red";
        passvalid = false;
        PasswordError.innerHTML= "this is not strong Password , make sure its  Between 6 and 18 characters, has at least one special character, has at least one lowercase letter, one uppercase letter, and one digit  ";
    }
    let alertShown = false; 
    let thesubmitBtn = document.getElementById("submitBtn");
thesubmitBtn.addEventListener("click", submitTheData);
function submitTheData(){
    event.preventDefault();
if (passvalid && mobilevalid && emailvalid){

    const userObj = {
        email: emailvalue,
        Password: Passwordvalue,
        mobile: mobilevalue,
      }
    const storedUserData = localStorage.setItem('user', JSON.stringify(userObj))

    } else {


    }

}
}


