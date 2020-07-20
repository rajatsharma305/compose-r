export default (...fns: Function[]) => (x: Function): Function => fns.reduce(
  (v, fn) => fn(v), x,
);
