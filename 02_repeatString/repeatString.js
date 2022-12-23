const repeatString = function(string, iterations) {
    let word = '';

    if (iterations < 0) {
        return 'ERROR'
    }

    for (let i = 0; i < iterations; i++) {
        word += string;
    }
    return word;
};

// Do not edit below this line
module.exports = repeatString;
