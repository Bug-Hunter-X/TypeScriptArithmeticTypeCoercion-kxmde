function add(a: number, b: number): number {
  return a + b;
}

function isNumber(arg: any): arg is number {
  return typeof arg === 'number';
}

function addSafe(a: any, b: any): number | undefined {
  if (isNumber(a) && isNumber(b)) {
    return add(a, b);
  } else {
    console.warn('Invalid input: Both arguments must be numbers.');
    return undefined; // or throw an error
  }
}

let result1 = addSafe(5, 10);  // Correct usage
console.log(result1); // Output: 15

let result2 = addSafe(5, '10'); // Safe handling of incorrect type
console.log(result2); // Output: undefined (or error) 

let result3 = addSafe('five', 10); //Another case of incorrect type
console.log(result3); //Output: undefined (or error)