function swap(string) {
    return string.replace(/([a-z]+)|([A-Z]+)/g, function(match, chr) {
        return chr ? match.toUpperCase() : match.toLowerCase();
    });
}

console.log(swap('AraBelLa'));