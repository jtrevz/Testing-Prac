const subtract = require("./subtract");

test("should return the difference between two numbers", () => {
  expect(subtract(3, 2)).toBe(1);
});
