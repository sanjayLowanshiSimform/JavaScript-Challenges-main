// Challenge 06 Rest and Spread Operation

// Add your data to the array person with your details and while calling the function printDetails use the spread operation so that each value of the array is passed as separate value and we get the desired output

const person = [
  fname= 'Abhishek',
  lname= 'Sawant',
  age= 23,
  location= 'Vadodara',
];


function printDetails(fname, lname, age, location) {
  const details = `${fname} ${lname} is ${age} years old and lives in ${location}.`;
  console.log(details);
}

printDetails(...person );

// Given below array numbers use rest operation and discard the first two elements of the array and print the rest of the elements

// The output should be [3,4,5,6,7,8]

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

function printNumbers([ , , ...numbers]) {
  console.log(`Rest of the elements: ${numbers}`);
}

printNumbers(numbers);

