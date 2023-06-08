// console.log(protect_email("robin_singh@example.com"));
// "robin...@example.com"

function hide_email(string) {
    let symbol = string.includes('@') ? true : false
    if(!symbol) {
        return `please insert @ symbol`
    } else {
        index = string.indexOf('@')
        string = string.split('@')
        temp_left_name = string[0];
        temp_right_name = string[1];

        divide_two = temp_left_name.length / 2;
        temp_left_name = temp_left_name.substring(0, temp_left_name.length - (divide_two)-1)
        return temp_left_name + '...' + temp_right_name

    }
}

console.log(hide_email('Arabella@gmail.com'));
