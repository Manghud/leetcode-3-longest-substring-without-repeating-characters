const lengthOfLongestSubstring = require('./index');

describe('lengthOfLongestSubstring', () => {
  let inputString;
  beforeEach(() => {
    inputString = '';
  });
  test('should return a number', () => {
    expect(lengthOfLongestSubstring(inputString)).toEqual(expect.any(Number));
  });
  describe('returned number', () => {
    test('should be equal to or smaller than the given string length', () => {
      inputString = 'sfklajs32098rwoefjaslfjr0';
      expect(lengthOfLongestSubstring(inputString) <= inputString.length).toEqual(true);
    });
    test('should be equal the length of a substring without repeating characters', () => {
      inputString = 'abcda';
      expect(lengthOfLongestSubstring(inputString)).toEqual(4);
    });
    test('should be equal to the length of the longest substring without repeating characters', () => {
      inputString = 'abcdabrstuvwxyrocomurciel 2agost';
      expect(lengthOfLongestSubstring(inputString)).toEqual('murciel 2agost'.length);
    });
  });
});