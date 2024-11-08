// Before Exponential Notation modification
const number = 123;
console.log("Before:", number);

// After Exponential Notation modification
function expo(x, f) {
  return Number.parseFloat(x).toExponential(f);
}
console.log("After: ", expo(123456, 2));
// output: Displays a Exponential Notation of "After: 1.23e+5"
