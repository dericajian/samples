var [a, b, c] = [1, 2, 3];
console.log(a+' ' + b + ' ' +c);

var [head, ...tail] = [1, 2, 3, 4, 5];
console.log(head + '--' + tail);  // tail = [2, 3, 4, 5]

var [x, y = 'world' ] = ['hello'];
console.log(x + ' ' + y);  // hello world

var {firstname, lastname} = {firstname: 'Jingfu', lastname: 'Ye'};
console.log(firstname + ' ' + lastname);

var {sin, cos, PI} = Math;
console.log('sin(pi/2):' + sin(PI * 0.5));  // 1

([x, y] = [25, 85]);
console.log('(x, y): ' + x + ', ' + y);
[x, y] = [y, x];
console.log('(x, y): ' + x + ', ' + y);

function foo() {
  return [1, 2, 3];
}
var [a, b, c] = foo();
console.log(a + ' ' + b + ' ' + c);

function bar() {
 return {x: 10, y: 20, z: 30}; 
}
var {x, y, z} = bar();
console.log(x + ' ' + y + ' ' + z);

function f({x, y, z}) {
  console.log('inside f: ' + x + ' ' + y + ' ' + z);
}
f({x:11, y: 22, z: 33});

var pairs = new Map();
pairs.set('firstname', 'Jingfu');
pairs.set('lastname', 'Ye');
for (let [key, value] of pairs) {
  console.log(key + '-' + value);
}


