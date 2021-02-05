const isString = (value) => typeof value === "string";
const isNumber = (value) => typeof value === "number";
const minLength = (value) => ({ length }) => length >= value;
const maxLength = (value) => ({ length }) => length <= value;
const biggerThan = (num) => (value) => value > num;

/* Write a plausible implementation of this function */
const composeValidators = (/* params */) => {
  /* Tip: check if any of the Array.prototype methods can be useful */
};

const isValidUsername = composeValidators(
  isString,
  minLength(4),
  maxLength(25)
);
const isAdult = composeValidators(isNumber, biggerThan(17));

isValidUsername("foo"); // false
isValidUsername("potato-head"); // true

isAdult("john"); // false
isAdult(2); // false
isAdult(23); // true
