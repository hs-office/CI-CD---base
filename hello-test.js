const a = require('./hello world'); // import your function

test('sayHello returns hello, world!', () => {
  expect(a()).toBe("hello, world!");
});
