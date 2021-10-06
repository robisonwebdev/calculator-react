const math = {
    add: function(a, b) {
        return a + b;
    },
    divide: function(a, b) {
        if (b === 0) {
            return (null);
        } else {
            return a / b;
        }
    },
    multiple: function(a, b) {
        return a * b;
    },
    percentage: function(a) {
        return (a / 100);
    },
    plusNegative: function(a) {
        return (-1 * a);
    },
    subtract: function(a, b) {
        return a - b;
    }
};

export default math;