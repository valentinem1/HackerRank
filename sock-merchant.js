// John works at a clothing store. He has a large pile of socks 
// that he must pair by color for sale. Given an array of integers 
// representing the color of each sock, determine how many pairs of socks with matching colors there are.

// For example, there are 7 socks with colors ar = [1, 2, 1, 2, 1, 3, 1]. 
// There is one pair of color 1 and one of color 2. 
// There are three odd socks left, one of each color. The number of pairs is 2.

// Function Description

// Complete the sockMerchant function in the editor below. 
// It must return an integer representing the number of matching pairs of socks that are available.

// sockMerchant has the following parameter(s):

// n: the number of socks in the pile
// ar: the colors of each sock

// sample input
// n = 9
// ar = [10, 20, 20, 10, 10, 30, 50, 10, 20]

// sample output
// 3

////// SUDO CODE //////
// create a variable count to hold the number of pairs
// iterate over the array and create a hashMap
// iterate over hashMap and check for numbers >= 2
// increment counter with the numbers
// return the count

function sockMerchant(n, ar) {
    let hashMap = {};
    let count = 0;

    for(let i of ar){
        hashMap[i] = hashMap[i] + 1 || 1
    };

    for(let el in hashMap){
        if(hashMap[el] >= 2){
        count += Math.floor(hashMap[el] / 2);
        }
    }
    return count;
}
console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]), 3);
console.log(sockMerchant(10, [1, 2, 1, 2, 1, 1, 2, 5, 6, 5]), 4);
