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

//1
var johnMass = 60; //kg
var markMass = 70; //kg 
var johnHeight = 1.7; //meter
var markHeight = 1.8; //meter

//2
var markBMI = markMass / (markHeight * markHeight);
var johnBMI = johnMass / (johnMass * johnMass);
console.log('Mark BMI Is: ' + markBMI);
console.log('John BMI Is: ' + johnBMI);

//3 
var markBetter = markBMI > johnBMI;

//4
console.log('Is Mark got Better BMI than John? ' + markBetter);

/**********************
 * IF / Else statements
 * 
 */

var firstName = 'John';
var civilStatus = 'Single';

if (civilStatus === 'married') {
    console.log(firstName + ' is Married! ');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}

var isMarried = true;
if (isMarried) {
    console.log(firstName + 'is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}

var massMark = 78; //kg
var heightMark = 1.69; //meters

var massJohn = 92;
var heightJohn = 1.95;

var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);

if (BMIMark > BMIJohn) {
    console.log('Mark\' BMI is higher than john.');
} else {
    console.log('John\' BMI is higher than Mark.');
}

/********************
 *   BOOLEAN LOGIC
 */

var firstName = 'John';
var age = 20;

if (age < 13) {
    console.log(firstName + ' is a boy.');
} else if (age >= 13 && age < 20) {
    console.log(firstName + ' is a teenager.');
} else if (age >= 20 && age < 30) {
    console.log(firstName + ' is a young man. ');
} else {
    console.log(firstName + ' is a man. ');
}

/********************
 *  The Ternary Operator and Switch
 */

var firstName = 'John';
var age = 14;

//Ternary operator
age >= 18 ?
    console.log(firstName + 'drinks beer. ') : console.log(firstName + 'drink juice.');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

/** (if (age >= 18){
 *     var drink = 'beer';
 * } else {
 *     var drink = 'juice;
 * }) */

// Switch Statement
var job = 'cop';
switch (job) {
    case 'teacher':
        console.log(firstName + ' teaches kids how to code.');
        break;
    case 'driver':
        console.log(firstName + ' drives an uber in Lisbon.');
        break;
    case 'designer':
        console.log(firstName + ' design beautiful websites.');
        break;
    default:
        console.log(firstName + ' does something else.');
}

age = 17;
switch (true) {
    case age < 13:
        console.log(firstName + ' is a boy.');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager');
        break;
    case age >= 20 && age < 30:
        console.log(firstName + ' is a young man');
        break;
    default:
        console.log(firstName + ' is a man.');
        break;
}

/****************
 * Truthy and Falsy values and equality operators
 */

// falsy values: undefined, null, 0, '', NaN
// truthy values: NOT falsy values

var height;

height = 23;

if (height || height === 0) {
    console.log('Variable is defined');
} else {
    console.log('Variable has NOT been defined');
}

// Equality operators
if (height == '23') {
    console.log('The == operators does type coercion!');
}

/********
 * CODING CHALLENGE 2
 */

/**
 * John and Mike both play basketball in different teams.
 * In The lastest 3 games, John's team scored 89, 120 and 103 point, 
 * while Mike's team scored 116, 94 and 123 points.
 * 
 * 1. Calculate the average score for each team
 * 2. Decide which teams wins in average (highest average score),
 * and print the winner to the console.
 * Also include the average score in output.
 * 3. Then change the score to show different winners. Don;t forget to take into account there might be
 * a draw (same average score)
 * 
 * 4. Extra: Marry also play basketball, and her team score 97, 134 and 105 points. Like before
 * log average winner to the console. Hint: you will need the && operator to take the decision. If you
 * can't solve this one, just watch the solution, it's no problem
 * 
 * 5. Like before, change the scores to generate different winners, keeping in mind there might ne draws.
 * 
 *Goodluck
 * 
 */