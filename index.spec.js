const lengthOfLongestSubstring = require('./index');

describe('lengthOfLongestSubstring', () => {
  let inputString;
  beforeEach(() => {
    inputString = '';
  });
  test('should return a string', () => {
    expect(lengthOfLongestSubstring(inputString)).toEqual(expect.any(String));
  });
});