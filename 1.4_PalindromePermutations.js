/*

Palindrome Permutation: Given a string, write a function to check if it is a permutation of a 
palin­ drome. A palindrome is a word or phrase that is the same forwards and backwards. A 
permutation is a rearrangement of letters. The palindrome does not need to be limited to just 
dictionary words.

EXAMPLE
Input: Tact Coa
Output: True (permutations: "taco cat", "atco eta", etc.)

I: String
O: Boolean Value
C: Optimize
E: Empty String, spaces between characters and in front at end more tahn 2 of the same char, even and odd chars

time complexity: linear O(N)
space complexity: linear O(N)
*/

let palPerm = (s) => {    //s is string
    //if even: there must be two of every char
    //if odd: there must be only one unique char

    //use hash table to store letters
    //if we see the same letter again, delete from hash
    //check hash at the end: odd - 1 key left, even - no keys left
    //skip spaces

    let hash = {};
    let charCount = 0;

    for (let i = 0; i < s.length; i++) {
        let c = s[i];
        if (c === " ") {
            continue;          //skips that iteration
        }
        if (hash[c]) {      // if the character already exists in the hash then delete it 
            delete hash[c];
        } else {           // store in the hash and store as true
            hash[c] = true;
        }
        charCount++;
    }
    if (charCount % 2 === 0) {
        return Object.keys(hash).length === 0;            // if our character count is even then there should be no keys and that means its a palindrome
    } else {
        return Object.keys(hash).length === 1;            // if the charactacter count is odd then there will be one key left over, still a palindrome just an odd one
    }
}

console.log(
    palPerm('taco cat') === true,
    palPerm('atco cat') === true,
    palPerm('rac ecar rara') === true,
    palPerm('chirpinmermaid') === false,
    palPerm('aabbc') === true,
    palPerm('aabc') === false,
);