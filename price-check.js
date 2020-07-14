// iterate over productSold array
// check for index of the product sold in products array
// with the index look for price in productPrices and compare it with the soldPrice price.

function priceCheck(products, productPrices, productSold, soldPrice) {
    let count = 0;

    for(let i = 0; i <= products.length-1; i++){
        for(let j = 0; j <= productSold.length-1; j++){
        if(products[i] === productSold[j] && productPrices[i] !== soldPrice[j]){
            count++;
        }
        }
    }
    return count;
};
console.log(priceCheck(['chocolate', 'cheese', 'tomato'], [15.00, 300.90, 23.44], ['chocolate', 'cheese', 'tomato'], [15, 300.90, 10.00]), 1);
console.log(priceCheck(['chocolate', 'cheese', 'tomato'], [15.00, 300.90, 23.44], ['chocolate', 'cheese', 'tomato', 'cheese'], [15, 300.90, 10.00, 23.44]), 2);
console.log(priceCheck(['chocolate', 'cheese', 'tomato', 'cake'], [15.00, 300.90, 23.44, 30], ['chocolate', 'cheese', 'tomato', 'cheese'], [15, 300.90, 10.00, 23.44]), 2);