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
} else if (input == favNumber) {
  alert ("Congratulations!!!");
}  else {
  alert ("Please enter a valid number");
  
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

let typeId = "01";
let colorId = "PU";
let sizeId = "L";

switch (typeId) {
  case "01":
    type = "Tank Top"; 
    break;
  case "02":
    type = "T-Shirt";
    break;
  case "03":
    type = "Long Sleeve";
    break;
  case "04":
    type = "Sweat Shirt";
    break;
  default:
    type = "Other";
}
switch (colorId) {
  case "BL":
    color = "Black"; 
    break;
  case "BU":
    color = "Blue";
    break;
  case "RD":
    color = "Red";
    break;
  case "PU":
    color = "Purple";
    break;
  default:
    color = "White";
}

switch (sizeId) {
  case "S":
    size = "Small"; 
    break;
  case "M":
    size = "Medium";
    break;
  case "L":
    size = "Large";
    break;
  case "XL":
    size = "Extra Large";
    break;
  default:
    size = "One Size Fits All";
}

console.log(`Product: ${size} ${color} ${type}`);