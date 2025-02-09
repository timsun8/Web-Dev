function camelize(str) {
    return str
      .split('-') // splits 'my-long-word' into array ['my', 'long', 'word']
      .map(
        // capitalizes first letters of all array items except the first one
        // converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']
        (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
      )
      .join(''); // joins ['my', 'Long', 'Word'] into 'myLongWord'
}


function filterRange(arr4, a, b) {
    // added brackets around the expression for better readability
    return arr4.filter(item => (a <= item && item <= b));
}
  
let arr4 = [5, 3, 8, 1];
  
let filtered = filterRange(arr4, 1, 4);
  
alert( filtered ); // 3,1 (matching values)
  
alert( arr4 ); // 5,3,8,1 (not modified)


function filterRangeInPlace(arr, a, b) {

    for (let i = 0; i < arr.length; i++) {
      let val = arr[i];
  
      // remove if outside of the interval
      if (val < a || val > b) {
        arr.splice(i, 1);
        i--;
      }
    }
  
}
  
let arr = [5, 3, 8, 1];
  
filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4
  
alert( arr ); // [3, 1]


let arr1 = [5, 2, 1, -10, 8];

arr1.sort((a, b) => b - a);

alert( arr1 );


function copySorted(arr3) {
    return arr3.slice().sort();
}
  
let arr3 = ["HTML", "JavaScript", "CSS"];
  
let sorted = copySorted(arr);
  
alert( sorted );
alert( arr3 );


function Calculator() {

    this.methods = {
      "-": (a, b) => a - b,
      "+": (a, b) => a + b
    };
  
    this.calculate = function(str) {
  
      let split = str.split(' '),
        a = +split[0],
        op = split[1],
        b = +split[2];
  
      if (!this.methods[op] || isNaN(a) || isNaN(b)) {
        return NaN;
      }
  
      return this.methods[op](a, b);
    };
  
    this.addMethod = function(name, func) {
      this.methods[name] = func;
    };
}


let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let names = users.map(item => item.name);

alert( names ); // John, Pete, Mary


function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}
  
  // counts of appearances for all possible permutations
  let count = {
    '123': 0,
    '132': 0,
    '213': 0,
    '231': 0,
    '321': 0,
    '312': 0
};
  
  for (let i = 0; i < 1000000; i++) {
    let array = [1, 2, 3];
    shuffle(array);
    count[array.join('')]++;
}
  
  // show counts of all possible permutations
  for (let key in count) {
    alert(`${key}: ${count[key]}`);
}


function getAverageAge(users) {
    return users.reduce((prev, user) => prev + user.age, 0) / users.length;
  }
  
let john1 = { name: "John", age: 25 };
let pete1 = { name: "Pete", age: 30 };
let mary1 = { name: "Mary", age: 29 };
  
let ar = [ john, pete, mary ];
  
alert( getAverageAge(arr) ); // 28


function groupById(array) {
    return array.reduce((obj, value) => {
      obj[value.id] = value;
      return obj;
    }, {})
}