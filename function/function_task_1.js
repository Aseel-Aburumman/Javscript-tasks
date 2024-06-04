/*
1
Write a function named tellFortune that:
takes 4 arguments: number of children,
partner's name, geographic location, job title.
outputs your fortune to the screen like so:
"You will be a X in Y, and married to Z with N kids."

Ex: tellFortune('software engineer', 'Jordan', 'Alice', 3);
=> "You will be a software engineer in Jordan, and married to Alice with 3 kids."
*/

function tellFortune(n_children, partner_name, location, job_title) {
  let the_fourtune =
    "You will be a " +
    job_title +
    " in " +
    location +
    ", and married to " +
    partner_name +
    " with" +
    n_children +
    " kids.";
  console.log(the_fourtune);
}
tellFortune(0, "Ali", "jordan", "software engineer");

/*
2
Write a function named calculateDogAge that:
takes 1 argument: your puppy's age.
calculates your dog's age based on the conversion
rate of 1 human year to 7 dog years.
outputs the result to the screen like so:
"Your doggie is NN years old in dog years!"

Ex: calculateDogAge(1);
=> "Your doggie is 7 years old in dog years!"
*/
function calculateDogAge(puppy_age) {
  let actual_age =
    "Your doggie is  " + puppy_age * 7 + "years old in dog years!";
  console.log(actual_age);
}

calculateDogAge((puppy_age = prompt("enter you puppy age in years")));

/*
3
Write a function named calculateSupply that:
takes 2 arguments: age, amount per day.
calculates the amount consumed for rest of the life (based on a constant max age 100).
outputs the result to the screen like so:
"You will need NN to last you until the ripe old age of X"

Ex: calculateSupply(30, 3);
=> 'You will need 76650 cups of tea to last you until the ripe old age of 100;
*/

function calculateSupply(age, amount_per_day) {
  let result =
    "You will need " +
    (100 - age) * (amount_per_day * 360) +
    "to last you until the ripe old age of 100";
  console.log(result);
}
calculateSupply(
  (age = prompt("enter you current age in years")),
  (amount_per_day = prompt("enter how many mealls you eat per day "))
);

/*
4
Write a function called greet that:
takes 1 argument: name.
and it will return hello + name

Ex: greet("Adam")
=> "Hello Adam"
*/

function greet(name) {
  console.log("hello " + name);
}
greet((name = prompt("enter your name")));
/*
/*
5
what is the error:
function double(cat) {
  return 2 * x;
}
the x should be cat



function double(7) {
  return 2 * 7;
}
the 7 should be letter



function double('7') {
  return 2 * 'x';
}
the 7 should be num 
the x should be num
/



/
6
fix these functions:
func double1(x {
  return 2 * x ;
}
fix these functions:
func double1(x) {
  return 2 * x ;
}

functiondouble2 x)
return 2 * x;
}

function double2 (x){
return 2 * x;
}

function (x) double3 {
  return 2 * x;

function  double3 (x) {
  return 2 * x;}

*/
/*
7
Write a function called cube that:
accept 1 parameter and calculate the cube of this number

Ex: cube(4)
=> 64
*/

function cube(cube_num) {
  console.log(cube_num * cube_num * cube_num);
}
cube(4);

/*
8
Write a function called multiply that:
accept 2 parameters and calculate the multiply of these 2 numbers

Ex: multiply(3,4)
=> 12
Ex: multiply(5,4)
=> 20
*/

function multiply(x, y) {
  console.log(x + "x" + y + "=" + x * y);
}
multiply(4, 5);

/*
9
Write a function called canIGetADrivingLicense that:
accept 1 parameter represent the age
and if the age greater than or equal to 20 return "yes you can"
otherwise return "please come back after X years to get one"

Ex: canIGetADrivingLicense(21)
=> "yes you can"

Ex: canIGetADrivingLicense(17)
=> "please come back after 3 years to get one"

Ex: canIGetADrivingLicense(20)
=> "yes you can"

*/

function canIGetADrivingLicense(u_age) {
  if (u_age >= 20) {
    console.log("yes you can");
  } else {
    console.log("please come back after " + (20 - u_age) + "years to get one");
  }
}
canIGetADrivingLicense(15);
/*
10
Write a function called sameLength
that accepts two strings as arguments,
and returns true if those strings have the same length, and false otherwise.

**hint: how we can know string length   Ex: : "tree".length   => 4

Ex: sameLength("tree","clue")
=> true

Ex: sameLength("tree","car")
=> false
*/

function sameLength(thefirst, thesecond) {
  let fistlength = thefirst.length;
  let secondlength = thesecond.length;
  if (fistlength === secondlength) {
    console.log("true");
  } else {
    console.log("false");
  }
}
sameLength("tree", "alii");

/*
11
Write a function called largerNubmer
that accept two numbers as arguments,
and return the first larger numbers

Ex: largerNubmer(5,6)
=> 6

Ex: largerNubmer(5,3)
=> 5
*/

function largerNubmer(firstnum, secondnum) {
  if (firstnum > secondnum) {
    console.log(firstnum);
  } else {
    console.log(secondnum);
  }
}
largerNubmer(3, 4);
/*
12
Write a function called smallerNubmer
that accept three numbers as arguments,
and return the first smaller number

Ex: smallerNubmer(8,6,7)
=> 6

Ex: smallerNubmer(5,99,34)
=> 5

Ex: smallerNubmer(5,99,3)
=> 3

Ex: smallerNubmer(5,3,3)
=> 3

*/

function smallerNubmer(num1, num2, num3) {
  if (num1 < num2 && num1 < num3) {
    console.log(num1);
  } else if (num2 < num1 && num1 < num3) {
    console.log(num2);
  } else {
    console.log(num3);
  }
}

smallerNubmer(5, 4, 1);
// let num1 = parseInt(prompt("enter a number"));
// let num2 = parseInt(prompt("enter anothr number"));
// let num3 = parseInt(prompt("enter a number اخر مرة والله"));

/*
13
Write a function called shorterString
that accept five string as an arguments,
and return the first shorter string

Ex: shorterString("air","school","car","by","github")
=> by

Ex: shorterString("air","tr","car","by","github")
=> tr

Ex: shorterString("by","tr","car","air","github")
=> by

Ex: shorterString("air","by","car","school","github")
=> by

Ex: shorterString("air","tr","by","car","github")
=> by

Ex: shorterString("air","tr","car","github","by")
=> by

*/

function shorterString(nfirst, nsecond, nthird, nforth, nfifth) {
  let f_length = nfirst.length;
  let s_length = nsecond.length;
  let th_length = nthird.length;
  let foth_length = nforth.length;
  let fth_length = nfifth.length;

  if (
    f_length == s_length &&
    f_length == th_length &&
    f_length == foth_length &&
    f_length == fth_length
  ) {
    console.log(nfirst);
  } else if (
    s_length < f_length &&
    s_length < th_length &&
    s_length < foth_length &&
    s_length < fth_length
  ) {
    console.log(nsecond);
  } else if (
    th_length < f_length &&
    th_length < s_length &&
    th_length < foth_length &&
    th_length < fth_length
  ) {
    console.log(nthird);
  } else if (
    foth_length < f_length &&
    foth_length < s_length &&
    foth_length < th_length &&
    foth_length < fth_length
  ) {
    console.log(nforth);
  } else {
    console.log(nfifth);
  }
}
shorterString("hi", "hiii", "hello", "whaaat", "h");

/*
14
Write a function called longerString
that accept four string as an arguments,
and return the first longer string

Ex: longerString("air","school","car","github")
=> school

Ex: longerString("air","schoo","car","github")
=> github

try all the cases (change the order of the longestString)
*/

function longerString(first, second, third, forth) {
  let f = first.length;
  let s = second.length;
  let th = third.length;
  let foth = forth.length;

  if (f > s && f > th && f > foth) {
    console.log(first);
  } else if (s > f && s > th && s > foth) {
    console.log(second);
  } else if (th > f && th > s && th > foth) {
    console.log(third);
  } else {
    console.log(forth);
  }
}
longerString("hi", "hiii", "hello", "whaaat");

/*
15
Write a function called isEven
that accept 1 argument as a number,
and return true if this number is even
and false if this number is odd

Ex: isEven(1)
=> false
Ex: isEven(2)
=> true

*/

function isEven(a_number) {
  if (a_number % 2 == 0) {
    console.log("true");
  } else {
    console.log("false");
  }
}
isEven(5);
/*
16
Write a function called isOdd
that accept 1 argument as a number,
and return true if this number is Odd
and false if this number is Even

Ex: isOdd(4)
=> false
Ex: isOdd(5)
=> true

*/

function isOdd(a_number) {
  if (a_number % 2 == 0) {
    console.log("false");
  } else {
    console.log("true");
  }
}
isOdd(5);

/*
17
Write a function called positive
that accept 1 argument as a number,
and return the positive version of the number passed

Ex: positive(4)
=> 4
Ex: positive(-5)
=> 5

*/
function positive(positive_num) {
  if (positive_num < 0) {
    console.log(positive_num * -1);
  } else {
    console.log(positive_num);
  }
}

positive(5);
/*
18
Write a function called fullName
that accept two parameters, firstName and lastName,
and returns the firstName and lastName concatenated
together with a space in between.

Ex: fullName("Adam","McCallen")
=> "Adam McCallen"
Ex: fullName("Alex", "Mercer")
=> "Alex Mercer"
*/

function fullName(firstName, lastName) {
  console.log(firstName.concat(lastName));
}

fullName("ahmaad ", "ali");
/*
19
Write a function called average
that takes five numbers as inputs
and returns the average of those numbers.

Ex: average(1,2,3,4,5)
=> 3

Ex: average(5,7,9,3,5)
=> 5.8

*/

function average(n1, n2, n3, n4, n5) {
  let the_average = (n1 + n2 + n3 + n4 + n5) / 5;
  console.log(the_average);
}
average(1, 2, 3, 5, 6);
/*
20
Write a function called randomNumber
that didnt takes any parameter
and returns a random number between 0-1
** hint: you can seacrh using MDN

Ex: randomNumber()
=> 0.2278

Ex: randomNumber()
=> 0.475

*/

function randomNumber() {
  console.log(Math.random() * 1);
}
randomNumber();

/*
21
Write a function called randomBetweenNumbers
that takes 2 parameters
and returns a random number between them
** hint: you can seacrh using MDN

Ex: randomBetweenNumbers(1,8)
=> 7.5412

Ex: randomBetweenNumbers(3,100)
=> 23

*/
function randomBetweenNumbers(max, min) {
  console.log(Math.random() * (max - min) + min);
}
randomBetweenNumbers(10, 7);

/*
22
Write a function called scoreInUniversty
that takes 1 parameters
and returns the alpabet in the unevirsty
A => 95-100
B => 85-94
C => 70-84
D=> 50-69
F=> 0-49

Ex: scoreInUniversty(96)
=> "A"

Ex: scoreInUniversty(3)
=> "F"

Ex: scoreInUniversty(71)
=> "C"
*/

function scoreInUniversty(yarab) {
  if (yarab >= 95 && yarab <= 100) {
    return "A";
  } else if (yarab >= 85 && yarab <= 94) {
    return "B";
  } else if (yarab >= 70 && yarab <= 84) {
    return "C";
  } else if (yarab >= 50 && yarab <= 69) {
    return "D";
  } else if (yarab >= 0 && yarab <= 49) {
    return "F";
  } else {
    return "Invalid score"; // Handling invalid input
  }
}

console.log(scoreInUniversty((yarab = prompt("enter you grade"))));
/*
23
Write a function called counter
that will returns a number bigger
than the one that returnd before
and start from 0

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

*/

var counter1 = 0;
function counter() {
  ++counter1;
  console.log(counter1);
}

console.log(counter());
console.log(counter());

/*
24
Write a function called resetCounter
that will reset the previuos function
and return the number before reset and
a string say that the counter reset

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

Ex: resetCounter()
=> 3 and the counter reset now

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: resetCounter()
=> 2 and the counter reset now

Ex: counter()
=> 1
*/

var counter1 = 1;
function counter() {
  console.log(counter1);
  counter1++;
}
function resetCounter() {
  console.log(--counter1 + "And the counter is reset now");
  counter1 = 1;
}

console.log(counter());
console.log(counter());
console.log(resetCounter());
console.log(counter());
