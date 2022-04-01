const palindromes = function (str) {
    const replaced = str.toLowerCase().replace(/[^a-z]/g, "");
    const reversed = replaced.split("").reverse().join("")
    console.log(reversed)
    if (reversed === replaced) {
        return true
    } else {
        return false
    }

};

// Do not edit below this line
module.exports = palindromes;
