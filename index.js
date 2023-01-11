// // №1 Периметр квадрата код з варінтами
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

// // №2 Чи дорослий користувач неоптимізований код
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

// // №3 Чи дорослий користувач оптимізований код
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

// // №4 якщо користувач вводить дані вивести їх, інакше null
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

// // №5 перевірка на кратність
// const number1 = 47;
// const number2 = 5;
// /**
//  *
//  * @param {number} numbe1
//  * @param {number} number2
//  * @returns {boolen}
//  */
// const isMultiplicity = function (numbe1, number2) {
//   return number1 % number2 === 0;
// };

// if (Number.isInteger(number1) && Number.isInteger(number2)) {
//   console.log(isMultiplicity(number1, number2));
// } else {
//   console.log("number must be integer");
// }

// // №6 перевірка на існування трикутника
// let value1 = 1;
// let value2 = 1;
// let value3 = 1;
// /**
//  *
//  * @param {number} value1
//  * @param {number} value2
//  * @param {number} value3
//  * @returns {boolean}
//  */
// const isTriangleExist = function (value1, value2, value3) {
//   return (
//     value1 > 0 &&
//     value2 > 0 &&
//     value3 > 0 &&
//     value1 + value2 > value3 &&
//     value2 + value3 > value1 &&
//     value1 + value3 > value2
//   );
// };
// console.log(isTriangleExist(value1, value2, value3));

// // №7 два числа: якщо парні - повертає суму; якщо непарні - результат множення; якщо різні - повертає непарне
// // ВАРІАНТ №1 - неправильно (при діленні від'ємного отримаємо '-0')
// let number1 = 3;
// let number2 = 21;
// /**
//  *
//  * @param {number} number1
//  * @param {number} number2
//  * @returns {number}
//  */
// const checkTwoNumbers = function (number1, number2) {
//   if (number1 % 2 === 0 && number2 % 2 === 0) {
//     return (number1 + number2)
//   }
//   if (number1 % 2 === 1 && number2 % 2 === 1) {
//    return (number1 * number2)
//   }
//   if (number1 % 2 === 1 && number2 % 2 === 0 || number2 % 2 === 1 && number1 % 2 === 0) {
//    if (number1 > number2) {
//     return (number1)    }
//     if (number2 > number1) {
//       return (number2)    }
//    }
// }
// console.log(checkTwoNumbers(number1, number2));

// // ВАРІАНТ №2
// const number1 = 4;
// const number2 = 3;
// /**
//  *
//  * @param {number} number1
//  * @param {number} number2
//  * @returns {number}
//  */
// const checkTwoNumbers = function (number1, number2) {
//   if (number1 % 2 === 0 && number2 % 2 === 0) {
//     return number1 + number2;
//   }
//   if (number1 % 2 && number2 % 2) {
//     return number1 * number2;
//   }
//   if (number1 % 2) {
//     return number1;
//   }
//   return number2;
// };
// console.log(checkTwoNumbers(number1, number2));

// // №8 Порівняння 2 чисел
// /**
//  *
//  * @param {number} number1
//  * @param {number} number2
//  * @returns {number}
//  */
//  const compareTwoNumbers = function (number1, number2) {
//   if (number1 === number2 ) {
//     return 0;
//   }
//   if (number1 > number2 ) {
//     return 1;
//   }
//     return -1;
// };
// console.log(compareTwoNumbers(number1, number2));

// №9 Обчислити квадратне рівняння - ax2+bx+c=0
/**
 *
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @returns {number[] | null}
 */

const calcSquareEquation = function (a = 1, b = -26, c = 120) {
  const D = b * b - 4 * a * c;
  if (D < 0) {
    return null;
  }
  // if (D === 0) {
  //   return -b / (2 * a);

  if (D === 0) {
    const x = -b / (2 * a);
    return [x];
  }
  const x1 = (-b + Math.sqrt(D)) / (2 * a);
  const x2 = (-b - Math.sqrt(D)) / (2 * a);
  return [x1, x2];
};

const result = calcSquareEquation();
if (result) {
  console.log(result);
} else {
  console.log("roots not found");
}
