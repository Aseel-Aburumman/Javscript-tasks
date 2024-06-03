// 1- Write a program to declare two numbers. If both numbers are greater than 10,
//print "Both numbers are greater than 10". Otherwise, print "At least one number is not greater than 10".
let num1 = 5;
let num2 = 11;
if (num1 > 10 && num2 > 10) {
  console.log("Both numbers are greater than 10");
} else {
  console.log("At least one number is not greater than 10");
}

// 2- Write a program to declare a username and a password.
//If both the username and password are correct, print "Access granted". Otherwise, print "Access denied".

let r_username = "aseel";
let r_password = 123;
let entered_username = prompt("Please enter your name");
let entered_password = prompt("Please enter your password");

if (entered_username === "r_username" && password === entered_password) {
  console.log("Access granted");
} else {
  console.log("Access denied");
}

// 3- Write a program to declare a number. If the number is between 10 and 20 (inclusive), print "The number is between 10 and 20".
// Otherwise, print "The number is not between 10 and 20".
let yoth = prompt("Please enter a number");
if (yoth >= 10 && yoth <= 20) {
  console.log("The number is between 10 and 20");
} else {
  console.log("The number is not between 10 and 20");
}

// 4- Write a program that to declare age and whether they have a driver's license (yes or no).
//If the user is 18 or older and has a driver's license, print "You can drive". Otherwise, print "You cannot drive".

let age = prompt("Please enter your age");
let drivers_license = prompt("do you have a drivers license? yes or no ");

if (age >= 18 && drivers_license === "yes") {
  console.log("You can drive");
} else {
  console.log("You cannot drive");
}

// 5- Write a program to declare a number.
//If the number is greater than 10 or less than 0, print "Invalid number". Otherwise, print "Valid number".

let num3 = 15;

if (num3 > 10 || num3 < 0) {
  console.log("Invalid number");
} else {
  console.log("Valid number");
}

// 6- Write a programto declare a number.
//If the number is between 5 and 10 (inclusive) or between 20 and 25 (inclusive), print "The number is valid".
//Otherwise, print "The number is not valid".

let num4 = 15;

if ((num4 > 5 && num4 < 10) || (num4 > 20 && num4 < 25)) {
  console.log("The number is valid");
} else {
  console.log("The number is not valid");
}

// 7- to declare a password. If the password is "secret" or "password", print "Access granted".
//Otherwise, print "Access denied".

let r_password2 = "secret";
let r_password3 = "password";
let password2 = prompt("Please a password");
if (password2 === r_password2 || password2 === r_password3) {
  console.log("Access granted");
} else {
  console.log("Access denied");
}

// 8- Write a program to declare a number. If the number is between 0 and 100 (inclusive) and is even,
//print "The number is even and between 0 and 100". Otherwise, print "The number is not even and/or not between 0 and 100".

let num5 = 5;
if (num5 > 0 && num5 < 100 && num5 % 2 == 0) {
  console.log("The number is even and between 0 and 100");
} else {
  console.log("The number is not even and/or not between 0 and 100");
}

// 9- Write a program to declare two numbers. If either number is negative, print "At least one number is negative".
//Otherwise, print "Both numbers are positive".

let num6 = 5;
let num7 = -10;

if (num6 > 0 || num7 > 0) {
  console.log("At least one number is negative");
} else {
  console.log("Both numbers are positive");
}

// 10- Write a program to declare age and whether they are a student (yes or no).
//If the user is under 18 or is a student, print "You qualify for a discount". Otherwise, print "You do not qualify for a discount".

let age2 = prompt("Please enter your age");
let student = prompt("are you a student? yes or no ");

if (age2 < 18 || student === "yes") {
  console.log("You qualify for a discount");
} else {
  console.log("You do not qualify for a discount");
}
