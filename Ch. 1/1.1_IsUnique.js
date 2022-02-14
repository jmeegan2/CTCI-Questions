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

let isUnique = (string) => {
  // check each character and store in a hash table
  // if we find that the character that the character is already there return false
  // when done checking, return true

  // In JS all objects are hash tables

  // time complexity : linear - O(n)
  // space complexity: linear - O(n)

  let hash = {};

  for (let i = 0; i < string.length; i++) {
    let character = string[i];
    if (hash[character]) {
      return false;   // that means it already in the hash map which an object
    } else {
      hash[character] = true;
    }
  }
  return true; //when you get to this point it means theres no duplicates
};

console.log(isUnique('s') === true);
console.log(isUnique('ss') === false);
console.log(isUnique('abcdd') === false);
console.log(isUnique('rainbow') === true);


//functiom 

//hash map

//for loop 

  //declare variable character as a string[iteration]

/*if(hash[character]) {
  return false                              meaning that if its already in the hash its false not unique
} else {
  hash[character] =true
}

break out of for loop
return true


*/