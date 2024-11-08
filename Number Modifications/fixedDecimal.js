// Before Fixed Decimal modification
const number = 123;
console.log("Before:", number);

// After Fixed Decimal modification
function financial(x) {
  return Number.parseFloat(x).toFixed(2);
}
console.log("After: " + financial(123.456));
// output: Displays a fixed number of decimal places right after 123
