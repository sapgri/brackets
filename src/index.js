module.exports = function check(str, bracketsConfig) {
  const map = new Map(bracketsConfig.map((pair) => [pair[1], pair[0]]));
  const stack = [];

  for (let i = 0; i < str.length; i += 1) {
    if (map.has(str[i]) && stack.length && stack.at(-1) === map.get(str[i])) {
      stack.pop();
    } else if ([...map.values()].includes(str[i])) {
      stack.push(str[i]);
    } else {
      return false;
    }
  }

  return !stack.length;
};
