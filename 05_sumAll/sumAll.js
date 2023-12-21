const sumAll = function(integer1, integer2) {
    if(!Number.isInteger(integer1) || !Number.isInteger(integer2)) return "ERROR";
    if(integer1 < 0 || integer2 < 0) return "ERROR";
    
    let sum = 0;
    let minValue = Math.min(integer1, integer2);
    let maxValue = Math.max(integer1, integer2);


    for (let i = minValue; i <= maxValue; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
