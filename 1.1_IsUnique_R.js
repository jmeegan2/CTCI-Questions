/*
1.1 Is Unique: Implement an algorithm to determine if a string has all unique characters. 
What if you cannot use additional data structures?

I: string
O: boolean (true or false)
C: Optimize
E: No string
*/

let isUnique = (string) => {
    //create hash map
    let hash = {};

    //for loop to iterate through characters in string
    for (let i = 0; i < string.length; i++) {
        let character = string[i];
        if (hash[character]) {
            return false; //meaning this string has a duplicate and is not unique
        } else {
            hash[character] = true;      //meaning the value is set to 1 and is unique so far unless found again in string
        }

    }
    return true
}

console.log(isUnique('s') === true);
console.log(isUnique('ss') === false);
console.log(isUnique('abcdd') === false);
console.log(isUnique('rainbow') === true);