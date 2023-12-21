const repeatString = function(string, num) {
    if (num < 0) return "ERROR";
    let i = 0;
    let concatenatedString = '';

    while(i < num) {
        concatenatedString = concatenatedString + string 
        i++;
    };

    return concatenatedString;
};

// Do not edit below this line
module.exports = repeatString;
