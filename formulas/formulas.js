module.exports = {
/**
 * @param {string} formula Formula with variable X to calculate
 * @param {number} xNumber Initial number to start with
 * @param {number} xRange Highest number to calculate. Range will be xNumber up to and xRange
 * @return {string}
 */
    Xformula: function(formula, xNumber, xRange) {
        var i = 1, ranges = []
        while (i < xRange + 1) {
            var return_obj = {
                Formula: formula,
                X: (xNumber * i),
                Answer: eval(formula.split("x").join(`(${xNumber} * ${i})`))
            }
            ranges.push(return_obj);
            var i = i + 1;
        };
        return ranges
    }
}