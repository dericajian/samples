
////////////////

{
  var a = 10;
  let b = 11;
}

console.log('a: ' + a);
//console.log('b: ' + b);  // Error: b is not defined

/////////////////

const c = 123;
//c = 456;                 // Error: c is read-only
console.log('c: ' + c);  //

//////////////

function foo() {
  console.log('x1: ' + x1);  // x1: undefined;
  console.log('x2: ' + x2);  // Error ??
  console.log('b: ' + b);    // ??
  //typeof x2;
  var x1 = 10;
  let x2 = 11;
}

//foo();

