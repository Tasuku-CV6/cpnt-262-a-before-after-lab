// Before Concatenate Modification
const string1 = "Hello Bob";
const string2 = "Welcome to my home";

console.log("Before; " + string1 + " | " + string2);

// After Concatenate Modification
console.log("After; " + string1.concat(" ", string2));
// output: Displays string1 & string 2 togther
