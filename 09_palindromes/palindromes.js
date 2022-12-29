const palindromes = function (str) {
    // Append letters only to new string
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
        if ((/[a-zA-Z]/).test(str.charAt(i)))
            newStr += str.charAt(i);
    }

    // Change all to lowercase
    newStr = newStr.toUpperCase();

    // Determine whether it is a palindrome
    for (let i = 0; i < newStr.length / 2; i++) {
        if (newStr.charAt(i) !== newStr.charAt(newStr.length - i - 1))
            return false;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
