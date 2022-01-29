// Check Permutation: Given two strings,write a method to decide if one is a permutation of the
// other.


/*
I: two strings
O: boolean true or false
C: optimize 
E: no string, different lengths === false automatically

// time complexity is O(2N) or O(N) linear
*/


//declare function 


//if statement stating if strings are different lengths then it should return false or string is empty ''

//for loop for string one
//if hash[character] already exists increment hash[character] by 1 ++
//if hash [character] doesn't exist already then set to one

//for loop for string 2
//if(hash[character]) already exists then decrement it 
//if(hash[character] doesnt exist ) return false


//break out of loop

//return true

let checkPerm = (string1,string2) => {

let hash = {};

    if(string1.length !== string2.length) {
        return false;
    }

    for (let i = 0; i < string1.length; i++) {
        let character = string1[i] 
        if(hash[character]) {
            hash[character]++;
        } else {
            hash[character] = 1;
        }
    }

    for (let i = 0; i < string2.length; i++){
        let character = string2[i] 
        if(hash[character] && hash[character] !== 0) {
            hash[character]--;
        } else {
            return false
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