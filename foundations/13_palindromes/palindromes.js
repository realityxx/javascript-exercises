const palindromes = function (str) {
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';

    const cleanStr = str
    .toLowerCase()
    .split('')
    .filter((character) => alphanumerical.includes(character))
    .join('');

    const reversedStr = cleanStr.split('').reverse().join('');
    return cleanStr === reversedStr;
};

// Do not edit below this line
module.exports = palindromes;
