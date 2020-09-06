module.exports = {
    arrayOfMultiples: function (num, length) {
        var i = 1, multiples = [];
        while (i < length + 1) {
            multiples.push((num * i));
            var i = i + 1;
        };
        return multiples;
    }
}