var s = new Set([1,2,3,4,5,5,4]);
console.log(s.size);

for (let i of s) console.log(i);

var a = [...s];
console.log(a);
var a2 = Array.from(s);
console.log(a2);


