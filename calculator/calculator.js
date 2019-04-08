module.exports = {
  add
};

function add(a, b) {
  if (add.arguments.length > 2) {
    return Array.from(add.arguments).reduce((acc, curr) => acc + curr);
  } else if (a && b) {
    return a + b;
  } else if (Array.isArray(a)) {
    return a.reduce((acc, curr) => acc + curr);
  }
  return a;
}
