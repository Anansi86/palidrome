



/*Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.

We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2. */

// First make function take the string and reverse it
// Now to make my function make all alpanumeric figures lower case
// Next I need to remove spaces and non-aplanumeric characters
// Next I need to return the boolean 
// No split, join, or reverse
// Create forloop to make str all lowercase and remove spaces and symbols
// Create another forloop to reverse clnString and compare with reverseStr


function palindrome(str) {
    
    let regEx = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~\W]/g;
    let clnString = str.toLowerCase().replace(regEx, '');


     let reverseStr = "";
        for (let i = clnString.length - 1; i >= 0; i--) {
         reverseStr += clnString[i];
        }

    console.log("Original argument string is " + str); // now I'm being fancy 
    console.log( "Reverse string is " + reverseStr);
  
    return(clnString === reverseStr); 
}

console.log(palindrome("E.y.e")); 

 
//testing out this branch