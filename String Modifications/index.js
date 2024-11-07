// Before index modification
const paragraph = "I think that winter is a lot better than summer";
console.log(`Before: ` + paragraph);

// After index modification
const searchTerm = "winter";
const indexOfFirst = paragraph.indexOf(searchTerm);

console.log(`After: The index of the word "${searchTerm}" is ${indexOfFirst}`);
// output: "The index of the word "winter" is 13"
