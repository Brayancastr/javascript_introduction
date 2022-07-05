//VERY EASY #1
var num1=15
var num2=6
var subtraction = num1-num2
console.log(`the difference between ${num1} and ${num2} is ${subtraction}`)

//EASY #2
var person1= "Jake";
var person2= "Brayan";
var len1 = person1.length
var len2 = person2.length

if (len1>len2){
    longer_name=person1
    shorter_name=person2
    difference = len1-len2;
}
else{
    longer_name=person2
    shorter_name=person1
    difference = len2-len1;
}

console.log(`The name ${longer_name} is longer than ${shorter_name} by ${difference} characters`);

//MEDIUM
const hello = prompt("what is your name? I can tell whether you are shouting (typing in all caps) or whispering (typing in all lowercase)");

const hello_upper = hello.toUpperCase()
const hello_lower = hello.toLowerCase()

    if (hello == hello_upper){
        console.log("You were shouting (typing in all caps)")
    }
    else if (hello == hello_lower){
        console.log("You were whispering (typing in all lowercase)")
    }
    else{
        console.log("Invalid answer: You might have beenboth shouting and whispering")
    }



//HARD
function add(n1, n2) {
    return n1 + n2;   // The function returns the sum of n1 and n2
  }
function subtract(n1, n2) {
    return n1 - n2;   // The function returns the difference of n1 and n2
  }
function multiply(n1, n2) {
    return n1 * n2;   // The function returns the product of n1 and n2
  }
function divide(n1, n2) {
    return n1 / n2;   // The function returns the quotient of n1 and n2
  }

  console.log(add(20, 5))
  console.log(subtract(20, 5))
  console.log(multiply(20, 5))
  console.log(divide(20, 5))


//VERY HARD
var number1 = prompt("What is your first number?");
var number2 = prompt("What is your second number?");
var operator = prompt("What is your operator (either +, -, * or /)?");

if (operator == "+") {
    console.log(add(number1,number2))
}
else if (operator == "-") {
    console.log(subtract(number1,number2))
}
else if (operator == "*") {
    console.log(multiply(number1,number2))
}
else if (operator == "/") {
    console.log(divide(number1,number2))
}