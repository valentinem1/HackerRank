// Given an array of integers, find the sum of its elements.

// For example, if the array, [1, 2, 3], so return 6.

// Function Description
// Complete the simpleArraySum function in the editor below. It must return the sum of the array elements as an integer.

// Print the sum of the array's elements as a single integer.
// Sample Input
// 1 2 3 4 10 11
// Sample Output
// 31

function simpleArraySum(ar) {
    let num = 0;

    for(let i of ar){
        num += i
    }
    return num;
}
console.log(simpleArraySum([1, 2, 3], 6));
console.log(simpleArraySum([1, 3, 5, 2, 2], 13));
console.log(simpleArraySum([], 0));

// with reduce method

// function simpleArraySum(ar) {
//     return ar.reduce((a, b) => a + b, 0);
// }
