
/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function(s = '') {
  let sequence = {};
  let longest = 0;
  let lastStartingPoint = 0;
  while(lastStartingPoint < s.length) {
    for (let c = lastStartingPoint + 1; c < s.length; c++) {
      const character = s[c];
      if (!sequence[character]) {
        sequence[character] = true;
        continue;
      } else if (Object.keys(sequence).length > longest){
        longest = Object.keys(sequence).length;
      }
      sequence = { [character] : true };
    }
    lastStartingPoint++;
  }
  return longest;
};

module.exports = lengthOfLongestSubstring;