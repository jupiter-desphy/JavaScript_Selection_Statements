console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);
let min = 1;
let max = 10;
let favNumber = 7 
let input = prompt(`What is my favorite number between ${min} and ${max}?`);
input = parseFloat (input);

if (input < favNumber) {
  alert ("too low");
} else if (input > favNumber) {
  alert ("too high");
} else {
  alert ("Congratulations!!!");
}

// Exercise 2

let birthMonth = prompt("What is your birth month?\n (ex: January = 1)")
switch (birthMonth) {
  case "12":
  case "1":
  case "2":
    alert("Winter");
    break;
  case "3":
  case "4":
  case "5":
    alert("Spring");
    break;
  case "6":
  case "7":
  case "8":
    alert("Summer");
    break;
  case "9":
  case "10":
  case "11":
    alert("Fall");
    break;
  default:
    alert("Enter your month as a whole number between 1 and 12.")
}

// Exercise 3

switch (typeId) {
  case "01":
    
}