module.exports = {
    times: function (num1, num2) {
        return num1 * num2
    },
    add: function (num1, num2) {
        return num1 + num2
    },
    minus: function (num1, num2) {
        return num1 - num2
    },
    divide: function (num1, num2) {
        if (num1 !== 0 && num2 !== 0) {return num1 / num2} else {return "can't divide by 0"}
    }
}