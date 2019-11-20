/*
console.log('Hello World!!!');

// Variable Couse

//string var
var firstName = 'Naufal';
console.log(firstName);

var midName = '"W4LLSK1"';
console.log(midName);

var lastName = 'Syawal';
console.log(lastName);

// Integer var
var age = 21;
console.log(age);

//Boolean var
var fullAge = true;

var job;
console.log(job);

job = 'Teacher';
console.log(job);
*/

/****************
 *  Varuable mutation and type coercion
 */

var firstName = 'Wallski';
var age = 21;

// Type Coercion
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'Programmer';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

// Variable mutation
age = 'twenty one';
job = 'Programmer';

alert(firstName + ' is a' + age + ' year old ' + job + '. is he married? ' + isMarried);

// Asking a user input
var lastName = prompt(' What is his last Name? ');
console.log(firstName + ' ' + lastName);

/***********************
 * Basic Operators
 */

var year, yearJohn, yearMark;
now = 2018;
ageJohn = 28;
ageMark = 33;

// Math Operators
yearJohn = now - ageJohn;
yearMark = now - ageMark;

console.log(yearJohn);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

// Logical Operators
var johnOlder = ageJohn < ageMark;
console.log(johnOlder);

//typeof Operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older than John');

var x;
console.log(typeof x);

/*****************
 * Operator precedence
 */

var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

//Multiple Operators
var isFullAge = now - yearJohn >= fullAge; //true
console.log(isFullAge);

//Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

//Multiple Assignment
var x, y;
x = y = (3 + 5) * 4 - 6; // 8 x 4 - 6 // 32 - 6 // 26
console.log(x, y);

//More operators
x *= 2;
console.log(x);
x += 10;
console.log(x);
x--;
console.log(x);

/********************** 
 * CODING CHALLENGE 1
 */

/**
 * Mark and John are trying to compare their BMI (Body Mass Index),
 * which is calculated by formula: BMI = mass / height^2 = mass / (height * height).
 * (mass in kg and height in meter)
 * 
 * Question
 * 1. Store mark and johns mass and height in variables
 * 2. Calculate both their BMI
 * 3. Create a boolean variable containing information about whether mark has a better
 * BMI than John.
 * 4. Print a string to the console containing the variable from step 3
 * (something like "Is Mark's BMI higher than John's? true")
 * 
 * Let's Go!!!
 */