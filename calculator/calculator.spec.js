const { add } = require("./calculator.js");

// test away!

// test("It should add two numbers", function() {
//   // Arranged
//   const expected = 4;
//   const value1 = 2;
//   const value2 = 2;
//   // Act
//   const sum = add(value1, value2);
//   // Assert
//   expect(sum).toEqual(expected);
// });
test("It should add two numbers", function() {
  expect(add(2, 2)).toBe(4);
  expect(add(3, 3)).toBe(6);
  expect(add(5, 5)).toBe(10);
});

test("Should return one value if only one is passed in", function() {
  expect(add(2)).toBe(2);
});

test("Should return only number if string and number are passed in", function() {
  expect(add(2, 2, 2)).toBe(6);
  expect(add(2, 4, 6, 8)).toBe(20);
  expect(add([2, 4, 6, 8])).toBe(20);
});
