module.exports = {
    isDominant: function (array) {
        return eval(array.join(" + ")) >= 0 ? "Array is Positively dominant" : "Array is Negatively dominant"
    }
}