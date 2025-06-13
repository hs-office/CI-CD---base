const greet = require('./greeting');

test('greets the given name', () => {
  expect(greet('Mosh')).toBe('hello, Mosh!');
});
