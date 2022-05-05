// A function that takes two numbers and adds them
function addition(a, b) {
    return a + b;
  }

// Functions can call other functions
function doubleAddition(c, d) {
    var total = addition(c, d) * 2;
    return total;
  }

// Simple JavaScript log statement
function printHello() {
    return "Hello there!";
  }

// Arrow or fat arrow function, similar to python lambda function
printHello = () => "Hello there!";

// Original addition function
function addition(a, b) {
    return a + b;
  }

// Converted to an arrow function
addition = (a, b) => a + b;

// Original doubleAddition function
function doubleAddition(c, d) {
    var total = addition(c, d) * 2;
    return total;
  }

doubleAddition = (c, d) => addition(c, d) * 2;

// For loop
let friends = ["Sarah", "Greg", "Cindy", "Jeff"]
function listLoop(userList) {
    for (var i = 0; i < userList.length; i++) {
      console.log(userList[i]);
    }
 }

// For loop for a list of vegetables
var vegetables = ["Carrots", "Peas", "Lettuce", "Tomatoes"];

for (var i = 0; i < vegetables.length; i++) {
    console.log("I love " + vegetables[i]);
}

// Loop through numbers without using an array
for (var i = 0; i < 5; i++) {
    console.log("I am " + i);
 }

 // Build table 
function buildTables (data) {
  tbody.html("");
}

// The second line of code tells JavaScript to find the <tbody> 
// tag within the HTML and add a table row ("tr").
// With Object.values, JS reference one object from the array (UFO sightings).
// (dataRow) argument, we get the values into the dataRow. 
// forEach((val) specifies that we want one object per row.

data.forEach((dataRow) => {
  let row = tbody.append("tr");
  Object.values(dataRow).forEach((val) => {
    let cell = row.append("td");
    cell.text(val);
    }
  );
});

// With the function above, we have done the following:
// 1. Looped through each object in the array
// 2. Appended a row to the HTML table
// 3. Added each value from the object into a cell

// pseudocode practice with if statements
if (a date is entered) {
  Filter the default data to show only the date entered
};