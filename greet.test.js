test('greets Alice', () => {
  expect(greet('Alice')).toBe('hello, Alice!');
});

test('greets user with empty string', () => {
  expect(greet('')).toBe('hello, !'); // maybe we want to handle this better later
});

test('greets undefined', () => {
  expect(greet()).toBe('hello, undefined!');
});
