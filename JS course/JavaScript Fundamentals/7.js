// Runs.
// The result of -1 || 0 = -1, truthy
if (-1 || 0) alert( 'first' );

// Doesn't run
// -1 && 0 = 0, falsy
if (-1 && 0) alert( 'second' );

// Executes
// Operator && has a higher precedence than ||
// so -1 && 1 executes first, giving us the chain:
// null || -1 && 1  ->  null || 1  ->  1
if (null || -1 && 1) alert( 'third' );


let who = prompt('Who\'s there?','');

if (who === 'Admin') {
    let password = prompt('Password?', '');
    if ( password === 'TheMaster') {
        alert('Welcome!')
    }
    else if (password === null || password === '') {
        alert('Canceled')
    }
    else {
        alert('Wrong password')
    }
}
else if (who === null || who === '') {
    alert('Canceled')
}
else {
    alert('I dont know you')
}
