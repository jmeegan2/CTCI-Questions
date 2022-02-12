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

const urlify = (str, len) => {
    let s = '';
    let totalSpaces = str.length - len;
    let frontSpaces = 0;
    let flag = false;
    for (let i = 0; i < str.length; i++) {
        if (flag === false) {
            if (str[i] === '') frontSpaces++;
            else flag = true;
        }
        if (flag === true && i < str.length - (totalSpaces - frontSpaces)) {
            if (str[i] === '') s += '%20';
            else s += str[i]
        }
    }
    return s;
}

console.log(urlify("Mr John Smith", 13));