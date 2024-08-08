/* Switch Case */
// Task 4:- Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.

let day = 6;
switch (day)
 {
    case 1:
        console.log("sunday");
        break;
    case 2:
       console.log("monday");
        break;
    case 3:
        console.log("tueday");
         break;
    case 4:
        console.log("wednsday");
        break;
    case 5:
        console.log("thursday");
        break;
    case 6:
        console.log("friday");
        break;
    case 7:
        console.log("saturday");
        break;
    default:
        break;
}


// Task 5:- Write a program that uses a switch case to assign a grade('A',B,C,D,E) based on a score and log the grade to the console.

var score=85;

switch (true) {
    case score>=90:
        console.log("A");
        break;
        case score>=80:
            console.log("B");
            break;
            case score>=70:
        console.log("C");
        break;
        case score>=60:
        console.log("D");
        break;

    default:
        console.log("F");
        break;
}