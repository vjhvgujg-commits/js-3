
function hh() {

  var out = "";

  var city = prompt("Enter city name:");
  if (city === "Karachi") {
    out += "Welcome to city of lights<br>";
  }

  var gender = prompt("Enter your gender:");
  if (gender === "male") {
    out += "Good Morning Sir<br>";
  } else if (gender === "female") {
    out += "Good Morning Ma’am<br>";
  }

  var signal = prompt("Enter traffic signal color:");
  if (signal === "red") out += "Must Stop<br>";
  else if (signal === "yellow") out += "Ready to move<br>";
  else if (signal === "green") out += "Move now<br>";

  var fuel = prompt("Enter remaining fuel in litres:");
  if (fuel < 0.25) {
    out += "Please refill the fuel in your car<br>";
  }

  var a = 4;
  if (++a === 5) out += "Condition for variable a is true<br>";

  var b = 82;
  if (b++ === 83) out += "Condition for variable b is true<br>";

  var c = 12;
  if (c === 13) out += "Condition 2 is true<br>";
  if (c === 14) out += "Condition 4 is true<br>";

  var materialCost = 20000;
  var laborCost = 2000;
  var totalCost = materialCost + laborCost;
  if (totalCost === laborCost + materialCost) {
    out += "The cost equals<br>";
  }

  if ("car" < "cat") {
    out += "car is smaller than cat<br>";
  }

  var totalMarks = 300;
  var marksObtained = +prompt("Enter obtained marks:");
  var percentage = (marksObtained / totalMarks) * 100;

  var grade, remarks;
  if (percentage >= 80) {
    grade = "A-one"; remarks = "Excellent";
  } else if (percentage >= 70) {
    grade = "A"; remarks = "Good";
  } else if (percentage >= 60) {
    grade = "B"; remarks = "You need to improve";
  } else {
    grade = "Fail"; remarks = "Sorry";
  }

  out += "Total Marks: " + totalMarks + "<br>";
  out += "Marks Obtained: " + marksObtained + "<br>";
  out += "Percentage: " + percentage + "%<br>";
  out += "Grade: " + grade + "<br>";
  out += "Remarks: " + remarks + "<br>";

  var secretNumber = 7;
  var guess = +prompt("Guess the number (1-10):");
  if (guess === secretNumber) out += "Bingo! Correct answer<br>";
  else if (guess + 1 === secretNumber) out += "Close enough to the correct answer<br>";

  var num = +prompt("Enter a number:");
  out += (num % 3 === 0) ? "Divisible by 3<br>" : "Not divisible by 3<br>";
  out += (num % 2 === 0) ? "Even number<br>" : "Odd number<br>";

  var temp = +prompt("Enter temperature:");
  if (temp > 40) out += "It is too hot outside.<br>";
  else if (temp > 30) out += "Weather is normal.<br>";
  else if (temp > 20) out += "Weather is cool.<br>";
  else if (temp > 10) out += "Weather is very cool.<br>";

  var num1 = +prompt("Enter first number:");
  var num2 = +prompt("Enter second number:");
  var op = prompt("Enter operation (+, -, *, /, %)");
  var result;

  if (op === "+") result = num1 + num2;
  else if (op === "-") result = num1 - num2;
  else if (op === "*") result = num1 * num2;
  else if (op === "/") result = num1 / num2;
  else if (op === "%") result = num1 % num2;

  out += "Calculator Result: " + result + "<br>";

  document.getElementById("w").innerHTML = out;
  document.textContent.style.backgroundColor = "transparent";
}

function gg() {

  var out = "";

  var ch = prompt("Enter a character:");
  var code = ch.charCodeAt(0);

  if (code >= 48 && code <= 57) out += "It is a number<br>";
  else if (code >= 65 && code <= 90) out += "Uppercase letter<br>";
  else if (code >= 97 && code <= 122) out += "Lowercase letter<br>";

  var num1 = +prompt("Enter first number:");
  var num2 = +prompt("Enter second number:");
  if (num1 > num2) out += num1 + " is larger<br>";
  else if (num2 > num1) out += num2 + " is larger<br>";
  else out += "Both numbers are equal<br>";

  var num = +prompt("Enter a number:");
  if (num > 0) out += "Positive number<br>";
  else if (num < 0) out += "Negative number<br>";
  else out += "Zero<br>";

  var char = prompt("Enter a character:");
  out += ("aeiouAEIOU".includes(char)) ? "True (Vowel)<br>" : "False (Not vowel)<br>";

  var correctPassword = "js123";
  var userPassword = prompt("Enter password:");
  if (userPassword === "") out += "Please enter password<br>";
  else if (userPassword === correctPassword) out += "Correct password<br>";
  else out += "Incorrect password<br>";

  var hour = 13;
  out += (hour < 18) ? "Good day<br>" : "Good evening<br>";

  var time = +prompt("Enter time (24-hour):");
  if (time < 1200) out += "Good Morning<br>";
  else if (time < 1700) out += "Good Afternoon<br>";
  else if (time < 2100) out += "Good Evening<br>";
  else out += "Good Night<br>";

  document.getElementById("w").innerHTML = out;
}
function playMusic() {
 document.getElementById("music").play();

};