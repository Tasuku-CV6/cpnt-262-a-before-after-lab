// Before Access the first character Modification
let sentence =
  "I honestly still do not really understand Javascript that much.";
console.log("Before: " + sentence);

// After Access the first character Modification
let index = 11;
console.log(
  "After: The charcater at index " + index,
  "is " + sentence.charAt(index)
);
// output: Displays the character at index 11 as "s"
