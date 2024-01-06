// Function to reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Input string
var input = "Mindup";

// Output the original string
console.log("Original String:", input);

// Use setTimeout to reverse the string after a delay of 2 seconds
setTimeout(function() {
    // Reverse the string
    var reversedString = reverseString(input);

    // Output the reversed string
    console.log("Reversed String after 2 seconds:", reversedString);
}, 2000);
