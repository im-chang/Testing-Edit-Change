module.exports = (str1, str2) => {
  let first = str1.toLowerCase();
  let second = str2.toLowerCase();
  let count = 0;
  if (Math.abs(first.length - second.length) > 1) return false;

  for (let i = 0; i < first.length; i++) {
    if (first[i] === second[i]) {
    }
    if (first[i] !== second[i]) {
      count++;
      if (count > 1) {
        return false;
      }
    }
  }
  return true;
};
