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

