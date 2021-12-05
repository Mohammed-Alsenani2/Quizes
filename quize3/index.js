/* 1-create a function longestWord that returns the longest word in a sentence */

// const longestWord = function (str) {
//   const arr = str.split(" ");
//   let max = arr[0].length;
//   let element = arr[0];

//   for (let i = 1; i < arr.length - 1; i++) {
//     if (max < arr[i].length) {
//       max = arr[i].length;
//       element = arr[i];
//     } else {
//     }
//   }

//   return element;
// };

// console.log(longestWord("dogs and cats are cute"));

/* 2- create a function SumOddNumber that returns the sum of all od numbers inside an array of numbers */

// const sumOddNumber = function (arr) {
//   /*         write your code here        */
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 !== 0) {
//       sum += arr[i];
//     }
//   }
//   return sum;
// };

// console.log(sumOddNumber([]));

/* 3- create a function isPowerOfTwo that returns YES if a number is power of 2, and NO if not */
// const isPowerOfTwo = function (num) {
//   for (let i = num; i > 2; i--) {
//     if (num % 2 === 0) {
//       continue;
//     } else {
//       return "NO";
//     }
//   }
//   return "YES";
// };
// console.log(isPowerOfTwo(6));

/* 4- Create a function  flattenArray that takes an array of strings, numbers, and arrays. Then returns an array without an arrays inside it  */
// P.S: DO NOT USE .flat() or .flatMap() methods
// const flattenArray = function (arr) {
//   let newArray = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === "object") {
//       for (let j = 0; j < arr[i].length; j++) {
//         newArray.push(arr[i][j]);
//       }
//     } else {
//       newArray.push(arr[i]);
//     }
//   }
//   return newArray;
// };

// console.log(
//   flattenArray([
//     ["this"],
//     "is",
//     ["fine"],
//     88,
//     { name: "mike", height: 180 },
//     [3, 4],
//   ])
// );

/* 5- Create a function removeNotUnique that takes a string, delete any characters that are not unique from the string. */

// const removeNotUnique = function (str) {
//   for (let i = 0; i < str.length; i++) {
//     let char = str.charAt(i);
//     str.replaceAll(char, " ");
//   }
//   return str;
// };

// console.log(removeNotUnique("memory"));

/* 6- Create a function containsElements that takes two arrays of numbers and returns true if the second array contains elements of the numbers of the first array numbers */

// const containsElements = function (arr1, arr2) {
//   return arr1.find((elem) => elem === arr2[0] * arr2[1]);
// };

// console.log(containsElements([12, 14, 35], [5, 4, 3, 2, 7]));
