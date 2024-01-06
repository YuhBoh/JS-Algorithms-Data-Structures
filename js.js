// write a function, take one argu (int)

// if statement
  //if even return "Even"
// else
  // return "Odd"

// function evenOrOdd(num) {
//   if (num % 2 === 0) {
//     return "Even";
//   } else {
//     return "Odd";
//   }
// };

// console.log(evenOrOdd(1));

// write function, using for loop
// 

function addPositives(nums) {
  let sum = 0;
  for(let num of nums) {
    if (num < 0) {
      continue;
    } else {
      sum += num;
    };
  }
  return sum;
}

console.log(addPositives([1, -4, 7, 12]));