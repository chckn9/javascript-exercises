const repeatString = function(string, iterations) {
    let word = '';
    for (let i = 0; i < iterations; i++) {
        word += string;
    }
    return word;
};

// Do not edit below this line
module.exports = repeatString;
