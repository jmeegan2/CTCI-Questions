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

let checkPerm = (s1, s2) => {
    //if two srings have diff lengths, automatically return false
    //one way would be to sort boths strings and compare -O(n log n)
    //to optimize, we can make a map of one string and check the  second string 

    let hash = {}; // In JS every object is a hashtable

    if (s1.length !== s2.length) {
        return false;
    }

    for (let i = 0; i < s1.length; i++) {
        let character = s1[i];         // c is character
        if (hash[character]) {         // if c is found in hash
            hash[character]++;         // increment c count
        } else {
            hash[character] = 1;       // or set c count value to one 
        }
    }

    for (let i = 0; i < s2.length; i++) {
        let character = s2[i];
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