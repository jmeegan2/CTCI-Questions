// Check Permutation: Given two strings,write a method to decide if one is a permutation of the
// other.

/*
I: 2 strings
O: boolean (true or false)
C: optimize
E: empty string, diff lengths


time complexity: O(2n) or O(n) - linear
space compleity: O(n) - linear
*/

let checkPerm = (string1, string2) => {
    //if two srings have diff lengths, automatically return false
    //one way would be to sort boths strings and compare -O(n log n)
    //to optimize, we can make a map of one string and check the  second string 

    let hash = {}; // In JS every object is a hashtable

    if (string1.length !== string2.length) {
        return false;
    }

    for (let i = 0; i < string1.length; i++) {
        let character = string1[i];         // set character to an iteration of string 1
        if (hash[character]) {         // if character is found in hash
            hash[character]++;         // increment character count
        } else {
            hash[character] = 1;       // or set character count value to one 
        }
    }

    //So string 2 decrements and if it gets rid of all the value then its true and string1 is a permutation of string2

    for (let i = 0; i < string2.length; i++) { 
        let character = string2[i];                     //set character to an iteration of string 2
        if (hash[character] && hash[character] !== 0) {    // if c is in our hash and this character in hash is not equal to zero
            hash[character]--;                        // increment it negatively removing the character count 
        } else {
            return false;
        }
    }

    return true;
}

console.log(
    checkPerm('', '') === true,
    checkPerm('so', 'os') === true,
    checkPerm('sos', 'os') === false,
    checkPerm('abc', 'abz') === false,
    checkPerm('restful', 'fluster') === true,
)