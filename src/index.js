module.exports = function check(str, bracketsConfig) {
  let openingBrackets = "";
  let clothingBrackets = "";
  let stack = "";

  for (let i = 0; i < bracketsConfig.length; i++) {
    openingBrackets += bracketsConfig[i][0];
    clothingBrackets += bracketsConfig[i][1];
  }

  for (let j = 0; j < str.length; j++) {
    if (
      openingBrackets.indexOf(str[j]) !== -1 && clothingBrackets.indexOf(str[j]) !== -1 ||
      clothingBrackets.indexOf(str[j]) !== -1
    ) {
      if (openingBrackets.indexOf(stack[stack.length - 1]) === clothingBrackets.indexOf(str[j])) {
        stack = stack.slice(0, -1);
      } else if (openingBrackets.indexOf(str[j]) !== -1) {
        stack += str[j];
      } else {
        return false;
      }
    } else if (openingBrackets.indexOf(str[j]) !== -1) {
      stack += str[j];
    }
  }

  return stack.length === 0;
}
