const reverseString = function (string) {
    const orderedString = [];
    const reversedString = [];

    for (let i = 0; i < string.length; i++) {
        orderedString.push(string.charAt(i));
    };

    for (let j = 0; j < string.length; j++) {
        reversedString.push(orderedString.pop());
    };

    return reversedString.join('');
};

// Do not edit below this line
module.exports = reverseString;
