//VERY EASY #1
var n1 = prompt("What is your first number?");
var n2 = prompt("What is your second number?");
function min(n1, n2) {
    if (n1 > n2) {
        return n2
    }
    else {
        return n1
  }
}

console.log(min(n1,n2))


//EASY #2

const students = [
    ["Castro","Brayan", 20],
    ["Smith","John", 18] , 
    ["plite", "Nick", 22]];
    
    console.log(`Hello my name is ${students[1][1]} ${students[1][0]} and I'm ${students[1][2]} years old`)


//MEDIUM
var x = prompt("What is your number?");

const months = ["None", "January", "Feburary", "March", "Abril", "May", "June", "July", "August", "September", "October", "November", "December"]

if (1<=x<=12) {
  console.log(`The month is ${months[x]}`)
}
else{
  console.log("Invalid Number")
}


//HARD
var tomHeight = 9;
var tomMass = 8; 

var jerryHeight = 10;
var jerryMass = 45; 

var topBMI = tomMass/(tomHeight*tomHeight); 
var jerryBMI = jerryMass/(jerryHeight*jerryHeight);

const answers = new Boolean (topBMI> jerryBMI)
console.log(`Is Tom’s BMI higher than Jerry’s? ${answers}`)

