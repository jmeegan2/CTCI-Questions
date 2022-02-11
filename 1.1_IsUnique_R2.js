/*
1.1 Is Unique: Implement an algorithm to determine if a string has all unique characters. 
What if you cannot use additional data structures?

I: string
O: boolean (true or false)
C: optimize
E: no string
*/
let isUnique = (string) => {

    //initialize a hash map to store the values
    let hash = {};

    //create for loop to iterate over the string
    for(let i = 0; i < string.length; i++) {
        let character = string[i]; // initialize a variable that represent string at specific incrementation 
        //if else statement that decides that if it already exist to return false; if not continue
        if(hash[character]) {
            return false;
        }
        else {
         hash[character] = true;
        }
    }
    return true;
};

console.log( isUnique('s') === true);
console.log(isUnique('abcdd') === false);