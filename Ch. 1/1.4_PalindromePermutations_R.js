/*

Palindrome Permutation: Given a string, write a function to check if it is a permutation of a 
palin­ drome. A palindrome is a word or phrase that is the same forwards and backwards. A 
permutation is a rearrangement of letters. The palindrome does not need to be limited to just 
dictionary words.

I: string
O: boolean (true or false)
C: optimize
E: Empty string

Space and time complexity are 0(N) linear
*/

let palPerm = (string) => {

    //create hash map to store characters
    let hash = {};
    //create character count
    let charCount = 0;
    //create for loop 
    for (i = 0; i < string.length; i++) {
        let character = string[i];   //this is for ease of reading
        
        if(character === ' ') {
            continue;               //skips the iteration
        }

        if (hash[character]) {         //if already exists then delete
            delete hash[character]
        } else {                          //if it doesn't exist set it to true ie 1
            hash[character] = true;
        }
        charCount++;          //increment the count
    }

    if (charCount % 2 === 0) {
        return Object.keys(hash).length === 0;
    } else {
        return Object.keys(hash).length === 1;
    }
}

console.log(
    palPerm('james semaj') === true,
    palPerm('atco cat') === true,
    palPerm('rac ecar rara') === true,
    palPerm('chirpinmermaid') === false,
    palPerm('aabbc') === true,
    palPerm('aabc') === false,
);