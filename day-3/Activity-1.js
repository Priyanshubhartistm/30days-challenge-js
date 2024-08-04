/*  if-Else statements */

// Task 1:- Write a program to check if a number is positive , negative, or zero, and log the result to the console.
let num = 25;
if(num > 0){
    console.log(`${num} is positive`);
}else if(num < 0){
    console.log(`${num} is negative`);
}else{
    console.log(`${num}is zeero`);
}

// Task 2 :- Write a program to check if a person is eligible to vote (age >=) and log the result to the console.
let age = 19;
if (age >= 18) {
    console.log("person can eligible to vote");
    }else{
    console.log("person can't eligible to vote");
}