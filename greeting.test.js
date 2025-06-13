const greet = require('./greet');


test('greets the given name', () => {
  expect(greet('Mosh')).toBe('hello, Mosh!');
});
