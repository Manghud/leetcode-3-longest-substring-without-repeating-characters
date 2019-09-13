
/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function(s = '') {
  const sequence = {};
  const characters = s.split('');
  for (const character of characters) {
    if (!sequence[character]) {
      sequence[character] = true;
    } else {
      return Object.keys(sequence).length;
    }
  }
  return s.length;
};

module.exports = lengthOfLongestSubstring;