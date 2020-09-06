module.exports = {
    findnemo: function (string) {
        var messagearr = string.split(" ")
        if (messagearr.includes('nemo')) {
            return "Found nemo at " + (messagearr.indexOf('nemo') + 1)
        }
        return "We didn't find nemo"
    }
}