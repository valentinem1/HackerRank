// You are given a list of n products, each with a name, price and weight.

// Find out how many duplicates of a product are present within the list. A duplicate is a product with all parameters, equal to some other product.

// input is 3 lists

//    Name Price Weight
//  1. ball 2     1
//  2. box  2     2
//  3. ball 2     1
//  4. ball 2     1
//  5. box  2     3
// output:

//     2
// explanation:

// (1.) is same as (3.) and is also same as (4.) so there is 2... 1->3 and 1->4
// Function Description
// numDuplicates has the following parameter(s):
// name: string array of size n, where names[i] denotes the name of the ith product
// price: int array of size n, where prices[i] denotes the price of the ith product
// weight: int array of size n, where weights[i] denotes the weight of the ith product
// function you need to fill out:

////// PSEUDO CODE //////
// create a hash map with each name price and weight as a string key together
    // ex: 'box12': 1  // => box being the name, 1 being the price and 2 being the weight combined together
// iterate over hashMap and look for keys with a value >= 2
// if true add the value to the count -1.
// why -1? the hashMap will count every repeated keys if they appear 2 times it is actually duplicated only 1 time. 

function numDuplicates(name, price, weight) {
    let hashMap = {};
    let count = 0;

    // As the problem statement doesn't mention having arrays of the same length I decided to comment this out.
    // It will work with both as if commented out if a duplicate occurs it will be counted
    // If uncommented it will return 0 if the arrays length aren't the same
        // if(name.length !== price.length || name.length !== weight.length){
        //     return 0;
        // }

    for(let i = 0; i <= name.length-1; i++){
        hashMap[name[i] + price[i] + weight[i]] = hashMap[name[i] + price[i] + weight[i]] + 1 || 1
    }
    
    for(let el in hashMap){
        if(hashMap[el] >= 2){
            count+= hashMap[el]-1
        }
    }
    return count;
}
console.log(numDuplicates(['ball', 'ball', 'ball', 'ball', 'box', 'box', 'box'], [2, 2, 2, 2, 2, 3, 3], [1, 1, 1, 1, 3, 2, 2]));
console.log(numDuplicates(['ball', 'ball', 'box', 'box', 'bed', 'couch', 'bed', 'car'], [2, 3, 2, 2, 200, 543, 200, 10000], [1, 1, 2, 3, 100, 150, 100, 5000 ]));
console.log(numDuplicates(['ball', 'ball', 'box'], [1, 1], [2, 2]))