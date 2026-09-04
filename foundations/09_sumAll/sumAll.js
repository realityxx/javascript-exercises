const sumAll = function(a, b) {
    if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
    if (min < 0 || max < 0) return "ERROR";
    [min, max] = min > max ? [max, min] : [min, max];

    let sum = 0;
    for(let i = a; i < b + 1; i++)
    {
        sum += i;
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;
