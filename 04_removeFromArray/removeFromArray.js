const removeFromArray = function(...args) {
    const array = args[0];

    for (let i = 0; i < args.length - 1; i++) {
        let index = array.indexOf(args[i + 1]);

        // Only splice if item is found
        if (index > -1) {
            array.splice(index, 1);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
