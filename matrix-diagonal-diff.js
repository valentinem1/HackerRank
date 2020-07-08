// Function description
// Complete the  function diagonalDifference in the editor below. It must return an integer representing the absolute diagonal difference.
// diagonalDifference takes the following parameter:
// arr: an array of integers.
// Output Format
// Print the absolute difference between the sums of the matrix's two diagonals as a single integer.
// Sample Input
// 3
// 11 2 4
// 4 5 6
// 10 8 -12
// Sample Output
// 15

// get length of matrix
// create variables to hold diagonals sum
// iterate over main array
// iterate over subarrays
// check if main array index === subarray index
// if yes add up for left to right diagonal
// check if main array index + subarray index === to matrix length -1
// if yes add up for the right to left diagonal

// ex: const matrix = [
//     [11, 2, 4], 
//     [4, 5, 6], 
//     [10, 8, -12]
// ]

function diagonalDifference(arr) {
    const n = arr.length;
    let diag1 = 0;
    let diag2 = 0;

    // iterates over the main array
    for(let i=0; i<n; i++){
        // iterates over subarrays inside main array
        for(let j=0; j<n; j++){
        // add up element from the left to right diagonal
            if(i === j) { 
            // console.log(arr[i][j])
                diag1 += arr[i][j];
            }
            // add up element from the right to left diagonal
            if(i + j === n - 1){
                diag2 += arr[i][j];
            }
        }
    }
    return Math.abs(diag1 - diag2);
};
console.log(diagonalDifference([[11, 2, 4], [4, 5, 6], [10, 8, -12]]), 15);
console.log(diagonalDifference([[2, 3, 6], [5, 10, 2], [1, -10, 8]]), 3);