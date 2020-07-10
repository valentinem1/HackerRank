// Given a  2D Array, :

// 1 1 1 0 0 0
// 0 1 0 0 0 0
// 1 1 1 0 0 0
// 0 0 0 0 0 0
// 0 0 0 0 0 0
// 0 0 0 0 0 0
// We define an hourglass in A to be a subset of values with 
// indices falling in this pattern in arr's graphical representation:

// a b c
//   d
// e f g
// There are 16 hourglasses arr in , and an hourglass sum is the sum of an hourglass' values. 
// Calculate the hourglass sum for every hourglass in , then print the maximum hourglass sum.

// For example, given the 2D array:
// -9 -9 -9  1 1 1 
//  0 -9  0  4 3 2
// -9 -9 -9  1 2 3
//  0  0  8  6 6 0
//  0  0  0 -2 0 0
//  0  0  1  2 4 0

// We calculate the following 16 hourglass values:
// -63, -34, -9, 12, 
// -10, 0, 28, 23, 
// -27, -11, -2, 10, 
// 9, 17, 25, 18

// Our highest hourglass value is 28 from the hourglass:
// 0 4 3
//   1
// 8 6 6

////// SUDO CODE //////
// create a count variable holding the lowest sum of hour glass
// ex: lowest sum will be -9 * 7 = -63
// create a first loop to iterate over array
// create a second loop to iterate over subarrays
// add up each element from subarrays for a length of 3 * 3
// create a variable sum to hold total of the add elements
// check if the total of sum is bigger than the count variable assign count to sum
// this allows to compare previous sum of hour glass to the new sum
// to return the highest sum

function hourglassSum(arr) {
    let count = -63;

    for(let i = 0; i < 4; i++){
        for(let j = 0; j < 4; j++){
            let sum = arr[i][j] + arr[i][j+1] + arr[i][j+2] + arr[i+1][j+1] + arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2]

            if(sum > count){
            count = sum
            }
        }
    }
    return count;
};
console.log(hourglassSum([
    [1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 0, 2, 4, 4, 0],
    [0, 0, 0, 2, 0, 0],
    [0, 0, 1, 2, 4, 0]
]));

console.log(hourglassSum([
    [1, 0, 1, 9, 0, 8],
    [0, 1, 0, 0, 6, 0],
    [1, 2, 5, -3, 0, 0],
    [0, 9, 2, 4, -5, 0],
    [0, 0, 0, -7, 0, 0],
    [2, 0, 1, 8, 4, 0]
]));