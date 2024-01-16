// I am a comment

console.log('Hello World') // this logs hello world to the console and is a comment

/*
I am a comment
that has multiple
lines and is really
cool
*/

// Can declare variable without a value
var firstName;
console.log(firstName);
firstName = 'George';
console.log(firstName);

// Can also declare variable with a value
var lastName = 'Bush';
console.log(lastName);

var lastName;
console.log(lastName); // Not undefined, get the value 'Bush' from above - due to variable hoisting

var lastName = 'Clinton';
console.log(firstName, lastName);

message = 'DO NOT DO THIS!';
console.log(message);

// End lines with either semicolons or new lines

// One line
console.log(firstName); console.log(lastName);

// on Multiple Lines (the semi colons are now optional)
console.log(firstName);
console.log(firstName)
console.log(lastName);
console.log(lastName)

// But this will not work
// console.log(firstName) console.log(lastName)


/////////////
// STRINGS //
/////////////
var myString1 = "This is a string";
var myString2 = 'This is also a string';
var myString3 = "John's string with an apostrophe";
var myString4 = 'John\'s string with an apostrophe';
var myString5 = "My \"string\" with quotes";
var myString6 = 'My "string" with quotes';
console.log(myString1)
console.log(myString2)
console.log(myString3)
console.log(myString4)
console.log(myString5)
console.log(myString6)

// String concat
var fullName = firstName + ' ' + lastName;
console.log(fullName);

// Accessing
console.log(fullName[0])
console.log(fullName[8])
console.log(fullName[20])
console.log(fullName[-1])

// Methods
console.log(fullName);
console.log(fullName.toUpperCase());

console.log(fullName);
console.log(fullName.toLowerCase());

// Length
console.log(fullName.length);

// Slice
console.log(fullName)
console.log(fullName.slice(2, 8))
console.log(fullName.slice(5))

console.log(fullName.slice(-5))
console.log(fullName.slice(2, -2))

// Negative index does NOT work with bracket notation. Must use .slice
console.log(fullName[-3])
console.log(fullName.slice(-3, -2))

// Replace
console.log(fullName.replace('George', 'Bill'));
console.log(fullName.replace(/[aeiou]/g, m=>m.toUpperCase()))

// Template/String Literals
var stringMultiLine = `This is a string
that is written 
on multiple lines`

console.log(stringMultiLine);

var funkMan = `The best funk musician of his time was ${fullName}`
console.log(funkMan);

var funkMan2 = 'The best funk musician of his time was ${fullName}'
console.log(funkMan2);

var funkInfo = `The best funk musician of his time was ${lastName}, ${firstName}: ${fullName.toUpperCase()}`
console.log(funkInfo);
