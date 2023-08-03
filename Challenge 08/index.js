// Challenge 08 Nullish Coalescing Operator

// Write Nullish Coalescing Operation withing printDetails function such that the function accepts empty string as last name

function printDetails(fname, lname) {
  fname = fname ?? '   ';
  lname = lname ?? '   ';
  console.log(`I am ${fname} ${lname}`);
}

printDetails();
printDetails('Abhishek');
printDetails('Abhishek', 'sawant');
