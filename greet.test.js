test('greets Alice', () => {
  expect(a('Alice')).toBe('hello, Alice!');
});

test('greets user with empty string', () => {
  expect(a('')).toBe('hello, !'); // maybe we want to handle this better later
});

test('greets undefined', () => {
  expect(a()).toBe('hello, undefined!');
});
