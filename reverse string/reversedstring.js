module.exports = {
    reverse: function (var1) {
        var var2 = new Array, i = 1;
        while (var2.length < var1.length) {
            var2.push(var1[var1.length - i]);
            var i = i + 1;
        };
        return var2.join("");
    }
};