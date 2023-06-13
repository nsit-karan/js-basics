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


console.log(sortString("hgjkorb"));