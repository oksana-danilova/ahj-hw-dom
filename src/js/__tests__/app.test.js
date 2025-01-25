/* eslint-disable jest/expect-expect */
/* eslint-disable jest/valid-title */
test("Test", () => {
  const expected = 4 * 4;
  const received = 16;
  expected(received).toBe(expected);
});
