// name: "Ray",
//         yearOfBirth: 1962,
//         yearOfDeath: 2011,

// function compare (person1, person2)

let findTheOldest = function (arr) {
  oldest = arr[0];
  if (!oldest.yearOfDeath) {
    oldest.yearOfDeath = new Date().getFullYear();
  }

  arr.reduce(function (acc, person) {
    if (!person.hasOwnProperty("yearOfDeath")) {
      person.yearOfDeath = new Date().getFullYear();
    }
    if (
      person.yearOfDeath - person.yearOfBirth >
      oldest.yearOfDeath - oldest.yearOfBirth
    ) {
      oldest = person;
    }
  });
  return oldest;
};

module.exports = findTheOldest;
