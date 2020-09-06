module.exports = {
    RegEx: function (string) {
        return string.replace(/i/gi, "|").replace(/a/gi, "4").replace(/b/gi, "8").replace(/c/gi, "(").replace(/d/gi, "[)").replace(/e/gi, "3").replace(/l/gi, "1").replace(/o/gi, "0").replace(/s/gi, "5").replace(/t/gi, "7").replace(/v/gi, "\\/").replace(/z/gi, "2")
    },
    StrSplit: function (string) {
        return string.split("i").join("|").split("a").join("4").split("b").join("8").split("c").join("(").split("d").join("[)").split("e").join("3").split("l").join("1").split("o").join("0").split("s").join("5").split("t").join("7").split("v").join("\\/").split("z").join("2")
    }
}