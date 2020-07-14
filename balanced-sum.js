function balancedSum(arr) {
    let count = 0;

    if(arr.length === 0){
        return;
    }

    for(let i = 0; i <= arr.length-1; i++){
        if(count === arr[arr.length-1]){
            return arr[i]
        }else{
            count+=arr[i];
        }
    }
};
console.log(balancedSum([1, 2, 3, 4, 6]));