function add(a: number, b: number): number {
  return a + b;
}

let result = add(5, '10'); // Type error is not caught at compile time
console.log(result); // This will compile and run, but will result in type coercion