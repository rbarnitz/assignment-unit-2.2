// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We create a variable called name, and assign it a value of 'Dane'
// We create a conditional if statement, comparing the value and type of name to the string/value 'Mary'
// If the value and type of name are equal to 'Mary', the statement will output 'Hi, Mary'
// If it does not, it will output 'How do you do?'

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We created a variable called secret, and a variable called code, to which we assigned the value 123
// We created a conditional if statement comparing the variable 'code' to the value and type of 123
// Since the value of code is 123, the variable secret is assigned the string 'super' and the value of 'code' is reassigned its priginal value multiplied by two by two
// The next if statement checks if the value of 'code' is less than the value 250. Since it is not greater than 250,
// the program moves to the console.log, and returns the value 'super'

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// We create three variables, and assign them three values
// the first if statement asks if two conditions are met, that isStudent equals true, and 'zip' is greater than 80000. Only one of these is true. The code moves to the next conditional.
// the second statement compares if either of the two conditionals are true, neither of which are. The code moves to the next conditional.
// the third statement compares if isStuent is equal to true, which it is. It then console.logs the value 'Welcome to Prime!'
// Once this condition is satisfied, the code moves to the end of the brackets and terminates.

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?');
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*

//FIX - the values colorOne and colorBlue are assigned to incorrect variables
// Assign correct values to these variables
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

// this statement should assign both colorOne and colortwo to 'purple', it only assigns colorOne to purple
// add: colorTwo = 'purple';
if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

//FIX - This conditional || is asking if either of the two conditions are met, the prompt asks that both conditions be met
// SHould use && instead of ||
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
//FIX - The prompt asks if age is greater than or equal to minAge, the conditional is comparing if minAge is less than or equal to age. 
// change the conditional to (age >=minAge)
let age = 21;
const minAge = 21;

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

