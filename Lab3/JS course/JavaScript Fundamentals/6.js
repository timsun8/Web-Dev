let value = prompt('What is the "official" name of JavaScript?', '');

if (value == 'ECMAScript') {
    alert('Right!');
} else {
    alert("You don't know? ECMAScript!");
}

let value2 = prompt('Type a number', 0);

if (value2 > 0) {
  alert( 1 );
} else if (value2 < 0) {
  alert( -1 );
} else {
  alert( 0 );
}

let message = (login == 'Employee') ? 'Hello' :
  (login == 'Director') ? 'Greetings' :
  (login == '') ? 'No login' :
  '';