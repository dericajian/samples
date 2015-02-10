// generator: generate an iterator

function* helloGenerator() {
  yield 'Hello';
  yield 'World';
  return 'End';
}

var gen = helloGenerator();
console.log(gen.next());  // {value: 'Hello', done: false}
console.log(gen.next());  // {value: 'World', done: false}
console.log(gen.next());  // {value: 'End', done: true}
console.log(gen.next());  // {value: undefined, done: true}

// generator return another iterator
function* arrayGenerator() {
  yield* [...'Hey'];
}
var gen2 = arrayGenerator();
console.log(gen2.next()); // {value: 'H', done: false}
console.log(gen2.next()); // {value: 'e', done: false}
console.log(gen2.next()); // {value: 'y', done: false}
console.log(gen2.next()); // {value: undefined, done: true}


// The parameter of next() is to set the value of previous yield call.
function* foo(x) {
  var y = 2 * (yield (x+1));
  var z = yield (y / 3);
  return (x + y + z);
}

var it = foo(5);
console.log(it.next());   // {value: 6, done: false}
console.log(it.next(12)); // {value: 8, done: false}, and set y = 2 * 12
console.log(it.next(13)); // {value: 42. done: true}, and set z = 13


// iterate object like an array
function* iterObject(obj) {
  let keys = Object.keys(obj);
  for (let i = 0; i < keys.length; i++) {
    let key = keys[i];
    yield [key, obj[key] ];
  }
}
let obj = {first: 'Jingfu', last: 'Ye'};
for (let [key, value] of iterObject(obj)) {
  console.log(key + ': ' + value);
}

// convert async style to sync style
function showSplash(cb) {
  console.log('showSplash');
  setTimeout(function() {cb();}, 1000);
}
function hideSplash(cb) {
  console.log('hideSplash');
  setTimeout(function(){cb();}, 1000);
}
function initialize(cb) {
  console.log('initialize');
  setTimeout(function(){cb();}, 1000);
}
function main() {
  showSplash(function() {
    initialize(function(){
      hideSplash(function() {
        console.log('Done');
      });
    });
  });
}
//main();

function showSplash2() {
  console.log('showSplash');
}
function hideSplash2() {
  console.log('hideSplash');
}
function initialize2() {
  console.log('initialize');
}
function* sequentTasks() {
  yield showSplash2();
  yield initialize2();
  yield hideSplash2();
}
function main2() {
  let tasks = sequentTasks();
  while (!tasks.next().done);
}
main2();
