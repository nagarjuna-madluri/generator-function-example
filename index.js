// Example of Generator Function in JS

let doWork = function* (a, b, c) {
  yield a;
  yield a + b;
  yield a + b + c;
};

let work = doWork(10, 20, 30);
console.log(work);
console.log(work.next()); // {value: 10, done: false}
console.log(work.next()); // {value: 30, done: false}
console.log(work.next()); // {value: 60, done: false}
console.log(work.next()); // { value: undefined, done: true}
