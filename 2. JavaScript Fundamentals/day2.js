const name = "Junido";
const age = 29;
const likeCoding = true;
let monthNumber = 6;

let length = 5;
let width = 3;
let area = length * width;
console.log("1.", area);

let remainder = 17 % 3
console.log("2.", remainder);

if (age >= 18) {
    console.log("3.", "You are an adult");
} else {
    console.log("3.", "You are a minor");
}

switch (monthNumber) {
    case 1:
        console.log("4.", "January");
        break;
    case 2:
        console.log("4.", "February");
        break;
    case 3:
        console.log("4.", "March");
        break;
    case 4:
        console.log("4.", "April");
        break;
    case 5:
        console.log("4.", "May");
        break;
    case 6:
        console.log("4.", "June");
        break;
    case 7:
        console.log("4.", "July");
        break;
    case 8:
        console.log("4.", "August");
        break;
    case 9:
        console.log("4.", "September");
        break;
    case 10:
        console.log("4.", "October");
        break;
    case 11:
        console.log("4.", "November");
        break;
    case 12:
        console.log("4.", "December");
        break;
    default:
        console.log("4.", "Not a valid month");
        break;
}