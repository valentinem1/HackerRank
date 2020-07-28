// A left rotation operation on an array shifts each of the array's elements 1 unit to the left. For example, if 2 left rotations are performed on array [1, 2, 3, 4, 5], then the array would become [3, 4, 5, 1, 2].

// Given an array a of n integers and a number, d, perform d left rotations on the array. Return the updated array to be printed as a single line of space-separated integers.

// Sample Input
// 5 4
// 1 2 3 4 5

// Sample Output
// 5 1 2 3 4


////// PSEUDO CODE //////
// loop over number d
// shift number in front and push it to the end of the array
// return the array

function rotLeft(a, d) {
    for(let j = 1; j <= d; j++){
        a.push(a.shift());
    }

    return a;
}
console.log(rotLeft([1, 2, 3, 4, 5], 4));
console.log(rotLeft([10, 2, 4, 7], 2));