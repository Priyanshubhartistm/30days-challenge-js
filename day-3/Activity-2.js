/*  Nested if-Else statements.*/
//Task 3:- Write a program to find the largest of three numbers using nested if-else statements.

let a = 10;
let b = 20;
let c = 30;
if (a>b) {
    if (a>c) {
       console.log(a); 
    }
    else{
        if (b>c) {
            console.log(b);
            
        }
    }
    
}