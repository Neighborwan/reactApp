function curry(fn: Function) {
  if (fn.length === 1) {
    return fn;
  }
  function generator(...args: any[]) {
    if (args.length === fn.length) {
      return fn(...args);
    } else {
      return (...args2: any[]) => generator(...args, ...args2);
    }
  }
  return generator;
}

const add = curry((x: number, y: number, z: number) => x + y + z);
const add1 = add(1);
const add2 = add1(2);
console.log(111, add2(3));
