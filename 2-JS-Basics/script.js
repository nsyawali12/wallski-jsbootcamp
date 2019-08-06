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