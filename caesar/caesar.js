const caesar = function (str, step) {
  function shiftIt(start, finish, position, step) {
    if (position + step >= start && position + step <= finish) {
      return position + step;
    } else if (position + step > finish) {
      return start + position + step - finish - 1;
    } else {
      return finish - (start - position - step) + 1;
    }
  }

  step = step % 26;
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122) {
      result += String.fromCharCode(shiftIt(97, 122, str.charCodeAt(i), step));
    } else if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {
      result += String.fromCharCode(shiftIt(65, 90, str.charCodeAt(i), step));
    } else {
      result += str[i];
    }
  }
  return result;
};

module.exports = caesar;

// console.log(caesar("Hello, World", 1));
