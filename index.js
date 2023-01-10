// // const side = prompt ('enter side', 4);
// // const side = '4';

// /**
//  * Get perimetr square
//  * @param {number} side
//  * @returns {number} number | NaN;
//  */
// const getPerimetrSquare = function (side = 8) {
//   // const perimetr = side + side + side +side;
//   if (side <= 0) {
//     return NaN;
//   }
//   // const perimetr = side * 4;
//   // return perimetr;
//   return side * 4;
// };

// console.log(getPerimetrSquare());
// console.log(getPerimetrSquare(undefined));
// console.log(getPerimetrSquare(3));
// console.log(getPerimetrSquare(-3));

// // /**
// //  * Is user adult
// //  * @param {number} age
// //  * @returns {boolen}
// //  */
// // const age = prompt ('enter age', 4);
// // const isAdult = function (age) {
// // if (age < 18) {
// //  return false;
// // }
// //   return true;
// // };
// // console.log(isAdult());

// /**
//  *
//  * @param {number} age > 0
//  * @param {number} FULL_AGE default value = 18
//  * @returns {boolean}
//  */
// const isAdult = function (age, FULL_AGE = 18) {
//   return age >= FULL_AGE;
// };
// const userAge = 45;
// console.log(isAdult(17));
// console.log(isAdult(18));

// /**
//  *
//  * @returns {string | null}
//  */
// const getUserInput = function () {
//   const input = prompt();
//   if (input) {
//     return input;
//   }
//   return null;
// };
// console.log(getUserInput());

const number1 = 47;
const number2 = 5;

/**
 *
 * @param {number} numbe1
 * @param {number} number2
 * @returns {boolen}
 */
const isMultiplicity = function (numbe1, number2) {
  return number1 % number2 === 0;
};

if (Number.isInteger(number1) && Number.isInteger(number2)) {
  console.log(isMultiplicity(number1, number2));
} else {
  console.log("number must be integer");
}
