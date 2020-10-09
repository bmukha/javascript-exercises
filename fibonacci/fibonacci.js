const fibonacci = function (value) {
  if (value < 0) {
    return "OOPS";
  } else if (value == 1 || value == 2) {
    return 1;
  } else {
    sum = 0;
    first = 1;
    second = 1;
    for (let i = 0; i < value - 2; i++) {
      sum = first + second;
      first = second;
      second = sum;
    }
  }
  return sum;
};

module.exports = fibonacci;
