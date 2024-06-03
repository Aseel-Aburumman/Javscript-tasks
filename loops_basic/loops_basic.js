// 1- Write a program that prints numbers from 1 to 10 using a for loop.
 for ( let i = 1; i < 11; i++){
  console.log(i)
 }
 console.log("task 2")

// 2-Write a program that prints the even numbers from 1 to 10 using a for loop.
for ( let x = 1;( x <=10); x++){
    if  (x % 2 == 0 ){
    console.log(x);}
 }

 console.log("task 3")

// 3- Write a program that prints the odd numbers from 1 to 10 using a while loop.
let em = 1;
while (em <=10){
    if  (em % 2 !== 0 ) console.log(em);
    em++;
 }

 console.log("task 4")

// 4- Write a program that prints the multiplication table of a number entered by the user using a for loop.
let num1 = prompt('Enter any number')
for ( let x = 1;( x <=12); x++){    
    console.log("multiplication table for " + num1 + '=' + x + '*' + num1 + '=' + x*num1);
 }
 console.log("task 5")

// 5- Write a program that calculates the sum of numbers from 1 to 100 using a while loop.
let num2 = 1
sum=0
while (num2 <=100 ){
sum = sum + num2;
num2++
}
console.log(sum)

console.log("task 6")

// 6- Write a program that calculates the factorial of a number entered by the user using a for loop.

let num3 = prompt('Enter any number you want ')
let factorial_num= 1
for ( let x = 1;( x<=num3 ); x++){   
console.log(factorial_num + '=' + factorial_num + '*' + x);    
    factorial_num= factorial_num * x;
console.log(factorial_num + '=' + factorial_num + '*' + x);    
 }
console.log(factorial_num)

 console.log("task 7")

// 7- Write a program that prints the Fibonacci series up to a certain number entered by the user using a while loop.
let num4 = prompt('Enter the number that you want the Fibonacci series to stop at ')
let a=0
let b=1

while (a <=num4){
console.log(a)

sum1 = a + b;
a=b
b=sum1
}


console.log("يلا هانت ")

// 8- Write a program that prints the reverse of the following numbers:
//5 , 10 , 15 , 20
// using a while loop.

let D=20
let F=5
while (D >= 5 ){
console.log(D)
C = D - F
D = C


}

console.log("وصلي اللهم وسلم وبارك ")
