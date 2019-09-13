const lengthOfLongestSubstring = require('./index');

describe('lengthOfLongestSubstring', () => {
  let inputString;
  beforeEach(() => {
    inputString = '';
  });
  test('should return a number', () => {
    expect(lengthOfLongestSubstring(inputString)).toEqual(expect.any(Number));
  });
});