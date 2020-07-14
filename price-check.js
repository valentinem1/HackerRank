// given a list of products and a list of prices
// check for price errors on the product sold's price
// return the number of errors as integer

// input lists
// product = ['chocolate', 'cheese', 'tomato'];
// productPrices = [15.00, 300.90, 23.44];
// productSolds = ['chocolate', 'cheese', 'tomato'];
// soldPrice = [15, 300.90, 10.00]

// output
//  1

// explanation
// (1) chocolate as a price of 15.00 which is equal to the product sold price
// (2) cheese as a price of 300.90 which is equal to the product sold price
// (3) tomato as a price of 23.44 which isn't equal to the product sold price which is was sold for 10.00 


///// PSEUDO CODE /////
///// BRUT FORCE /////
// iterate over products array
// iterate over productSold array
// compare ith product with ith productSold to see if they are equal
// also compare ith productPrices with ith soldPrice to see if they aren't equal
// if product is equal and price isn't count the error

///// FASTER //////
// iterate over products array and create a hashmap with key = product name & value = product price
// iterate over productSold array and compare each soldPrice with each value from the hashmap keys
// if price aren't equal increment count

function priceCheck(products, productPrices, productSold, soldPrice) {
    let count = 0;
    let hashMap = {};

    for(let i=0; i <= products.length-1;i++){
        hashMap[products[i]] = productPrices[i];
    };

    // for(let i = 0; i <= products.length-1; i++){
    //     for(let j = 0; j <= productSold.length-1; j++){
    //     if(products[i] === productSold[j] && productPrices[i] !== soldPrice[j]){
    //         count++;
    //     }
    //     }
    // }

    for(let j = 0; j <= productSold.length-1; j++){
        if(hashMap[productSold[j]] !== soldPrice[j]){
            count++;
        }
    }
    return count;
};
console.log(priceCheck(['chocolate', 'cheese', 'tomato'], [15.00, 300.90, 23.44], ['chocolate', 'cheese', 'tomato'], [15, 300.90, 10.00]));
console.log(priceCheck(['chocolate', 'cheese', 'tomato'], [15.00, 300.90, 23.44], ['chocolate', 'cheese', 'tomato', 'cheese'], [15, 300.90, 10.00, 23.44]), 2);
console.log(priceCheck(['chocolate', 'cheese', 'tomato', 'cake'], [15.00, 300.90, 23.44, 30], ['chocolate', 'cheese', 'tomato', 'cheese'], [15, 300.90, 10.00, 23.44]), 2);