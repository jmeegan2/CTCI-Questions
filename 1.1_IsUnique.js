/*
1.1 Is Unique: Implement an algorithm to determine if a string has all unique characters. 
What if you cannot use additional data structures?

IOCE stands for input, output, constraints, edge cases

I: string
O: boolean (true or false)
C: no additional data structures, optimize
E: empty string 

Using ES6 for this
*/

let isUnique = (s) => {
  // check each character and store in a hash table
  // if we find that the character that the character is already there return false
  // when done checking, return true

  // In JS all objects are hash tables

    // time complexity : linear - O(n)
    // space complexity: linear - O(n)

  let hash = {};

  for (let i = 0; i < s.length; i++) {
      let c = s[i];
      if (hash[c]) {
          return false;
      } else {
          hash[c] = true;
      }
  }
    return true; //when you get to this point it means theres no duplicates
};

console.log(isUnique('s') === true);
console.log(isUnique('ss') === false);
console.log(isUnique('abcdd') === false);
console.log(isUnique('rainbow') === true);
