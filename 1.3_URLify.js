/*
URLify: Write a method to replace all spaces in a string with '%20'. Y
ou may assume that the string has sufficient space at the end to hold 
the additional characters,and that you are given the "true" length of the string. 
(Note: If implementing in Java,please use a character array so that you can perform
this operation in place.)
EXAMPLE

Input: "Mr John Smith ", 13 Output: "Mr%20John%20Smith"

i: string, number
o: string 
c: optimize
e: empty strings, spaces in front, middle and end

space c: constant 
time c:  linear O(n)
*/



let URLify = (s, n = s.length) => {
    //first pass: count the number of non space characters in string
    //subtract chars from true length n to see how many spaces we are allowed to replace with %20

    //in js strings are immutable meaning can't be changed
    //second pass: 
    // if we see a space and there are still spafces leftm append '%20' to output string
    // when run out of spaces, append the empty string instead

    let out = '';
    let chars = 0;

    for (let i = 0; i < s.length; i++) {
        let c = s[i];
        if (c !== ' ') {
            chars++
        }
    }

    let spaces = n - chars;

    for (let i = 0; i < s.length; i++) {
        let c = s[i];
        if (c === ' ' && spaces > 0) {
            out += '%20';
            spaces--;
        } else if (c !== ' ') {
            out += c;
        }
    }

    // if n is not yet reached and there are still spaces left 
    while (spaces > 0) {
        out += '%20';
        spaces--;
    }

    return out;





    // //hash map to store string values
    // let hash = {};
    // //for loop to go through characters in string 
    // for(let i = 0;i < s.length; i++) {
    //     if(hash[i] === " ") {
    //         //input %20 somehow into the string 
    //         hash[i] = "%20"
    //     }
    //     //if statement for what to do if space encountered

    // }
    // return hash;
}

console.log(
    URLify('Mr John Smith ', 13) === 'Mr%20John%20Smith'
)