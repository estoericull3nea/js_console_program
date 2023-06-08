function convert_fullname_to_abbr(string) { // first option
    if(string.length === 0) {
        return `you input is blank`
    } else {
        string = string.trim().split(' ');
        if(string.length > 1) {
            temp_for_firstname = string[0]
            temp_for_lastname = string[1].charAt(0)
            return temp_for_firstname + ' ' + temp_for_lastname + '.'
        } else {
            return `please make it double name`
        }
       
    }
}

// test
console.log(convert_fullname_to_abbr('Arabella Grace'));


