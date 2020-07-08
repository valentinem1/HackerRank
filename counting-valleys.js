// Gary is an avid hiker. He tracks his hikes meticulously, paying close attention to small details like topography. 
// During his last hike he took exactly n steps. 
// For every step he took, he noted if it was an uphill, U, or a downhill, D step. 
// Gary's hikes start and end at sea level and each step up or down represents a 1 unit change in altitude. We define the following terms:

// A mountain is a sequence of consecutive steps above sea level, 
// starting with a step up from sea level and ending with a step down to sea level.
// A valley is a sequence of consecutive steps below sea level, 
// starting with a step down from sea level and ending with a step up to sea level.

////// SUDO CODE //////
// split string into array
// create variables to hold above sea level and below sea level number
// iterate over arr
// check if letter === "U" then increment aboveSea variable
// check if letter === "D" then decrement aboveSea variable
// check if aboveSea === -1
// if yes increment belowSea as valley are -1 below sea level

function countingValleys(n, s) {
    s = s.split("");
    let aboveSea = 0;
    let belowSea = 0;

    for(let i = 0; i < s.length; i++){
        if(s[i] === "U"){
        aboveSea++
        }
        else if(s[i] === "D"){
        aboveSea--
        if(aboveSea === -1){
            belowSea++
        }
        }
    }
    return belowSea;
}
console.log(countingValleys(8, "UDDDUDUU"), 1);
console.log(countingValleys(8, "DDUUDDUU"), 2);
console.log(countingValleys(5, "UUDDD") 1);