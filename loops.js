// @ts-check

// TODO: Create an array called numbers with values 1 through 5
// TODO: Write a for loop that prints each number in the array
// TODO: Write a while loop that counts down from 5 to 1
// TODO: Create a loop that prints only even numbers from the numbers array
// TODO: Create a loop that calculates the sum of all numbers in the array

/**
 * @type {Array<number>}
 */
const numbersList = [1, 2, 3, 4, 5];

console.log("numbers");
for (let i = 0; i <= numbersList.length - 1; i++) {
  console.log(numbersList[i]);
}

console.log(" reversed numbers");
let i = numbersList.length -1;
while (i >= 0) {
  console.log(numbersList[i]);

  i--;
}

console.log("even numbers");
for (let i = 0; i < numbersList.length; i++) {
  if (numbersList[i] % 2 === 0) {
    console.log(numbersList[i]);
  }
}

/**
 * @type {number}
 */
let total = 0;
console.log("sum of numbers");
for (let num of numbersList) {
  total += num;
}
console.log(total);
