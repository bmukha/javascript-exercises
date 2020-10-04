const palindromes = function (string) {
  const reg = /[a-zA-Z]+/;
  const arr = string
    .toLowerCase()
    .split("")
    .filter((item) => item.match(reg));
  const rev = [...arr].reverse();
  return JSON.stringify(arr) === JSON.stringify(rev);
};

module.exports = palindromes;
