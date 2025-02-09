function checkAge(age) {
    return (age > 18) ? true: confirm('Did parents allow you?');
}
function checkAge(age) {
    return (age > 18) || confirm('Did parents allow you?');
}

function powNum(num, pow) {
    for ( let i = 1; i < pow; i++) {
        res *= num;
    }
    return res;
}