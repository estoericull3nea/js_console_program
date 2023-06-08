function is_string(check) {
    return Object.prototype.toString.call(check) === "[object String]" ? true : false
}

console.log(is_string('ara'));
