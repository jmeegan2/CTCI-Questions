// Check Permutation: Given two strings,write a method to decide if one is a permutation of the
// other.
/*
The split() method is used to split a String object into an array of strings by separating the string into substrings. 
The sort() method is used to sort the elements of an array in place and returns the array. The join() method is used 
to join all elements of an array into a string.
*/

let checkPermu = (s1, s2) => {
    //if statement that will determine right off that bat that if they are the wrong lengths then they cannot be permutations
    //of eachother
    if (s1.length !== s2.length) {
        return false;
    } // else sort and compares
    //doesnt matter how its sorted as long as its sorted the same way
    else {
        var sortS1 = s1.split('').sort().join('');
        var sortS2 = s2.split('').sort().join('')
        return sortS1 === sortS2;
    }
    //declare variables that sort string somehow

}

console.log(checkPermu('ava', 'vaa'), true);

console.log(checkPermu('aba', 'aaba'), false)