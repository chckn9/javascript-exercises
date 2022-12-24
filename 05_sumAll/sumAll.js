const sumAll = function(num1, num2) {
    let loops = Math.abs(num1 - num2) + 1;
    let sum = 0;

    // return ERROR if negative
    if (num1 < 0 || num2 < 0)
        return 'ERROR';

    // return ERROR if not a number
    if (typeof num1 !== 'number' || typeof num2 !== 'number')
        return 'ERROR';

    for (let i = 0; i < loops; i++) {
        if (num1 < num2)
            sum += num1 + i;
        else
            sum += num2 + i;
    }

    return sum; 
};

// Do not edit below this line
module.exports = sumAll;
