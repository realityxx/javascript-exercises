const fibonacci = function(countArg) {
    let count;
    if (typeof countArg !== 'number') {
        count = parseInt(countArg);
    } else {
        count = countArg;
    }

    if(count < 0) return "OOPS";
    if(count === 0) return 0;

    let firstPrev = 1;
    let secondPrev = 0;
    let current;
    
    for (let i = 1; i <= count; i++) {
        current = firstPrev + secondPrev;
        secondPrev = firstPrev;
        firstPrev = current;
    }

    return firstPrev;
};

// Do not edit below this line
module.exports = fibonacci;
