/**
 * Capture some string related routines which keep coming up
 */

/**
 * 
 * JS doesnt give sort out of the box (afaik)
 * Instead what we do is split into char vector,
 * sort the vector (that is indeed provided),
 * then join the character vector back
 */
function sortString(str) {
    return str.split("").sort().join("");
}

/**
 * for (let i of collection) is the standard way
 * to iterate over all elements of a collection. 
 */
function iterateString(str) {
    for (let ch of str) {
        console.log(ch);
    }
}

console.log(sortString("hgjkorb"));

// Convert a string to lowercase
console.log("AbcFh".toLowerCase());

// iterate over all chars in a string
iterateString("Hi whats up !!");