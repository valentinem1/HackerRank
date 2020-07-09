// Emma is playing a new mobile game that starts with consecutively numbered clouds. 
// Some of the clouds are thunderheads and others are cumulus. 
// She can jump on any cumulus cloud having a number that is equal to the number of the current cloud plus 1 or 2. She must avoid the thunderheads. 
// Determine the minimum number of jumps it will take Emma to jump from her starting postion to the last cloud. It is always possible to win the game.

// Function Description
// Complete the jumpingOnClouds function in the editor below. 
// It should return the minimum number of jumps required, as an integer.
// jumpingOnClouds has the following parameter(s):
// c: an array of binary integers


////// SUDO CODE //////
// create count variable to keep track of jumps
// iterate over array of clouds
// check if cloud+2 === 0 and cloud+2 is smaller than the array length to make sure we are still in the array
// if yes increment count and increment the iteration variable by 2
// else increment count as well and increment iteration variable by 1

function jumpingOnClouds(c) {
    let count = 0;
    
    let i = 0;
    while(i < c.length-1){
        if(c[i+2] < c.length && c[i+2] === 0){
            count++
            i+=2
        }else {
            count++
            i++
        }
    }
    return count;
}
console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 0]), 4);