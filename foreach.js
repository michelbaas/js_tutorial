// let a = ["git", "hub", "cat", 20];
// a.forEach(function(element) {
//   console.log(element);
// });

// let soliloquy = "To be, or not to be, that is the question:";
// Array.from(soliloquy).forEach(function(character) {
//   console.log(character);
// });

// let a = ["git", "hub", "cat", 20];
// a.forEach((element) => {
//   console.log(element);
// });

let a = [8, 787, 20, 99, 878, 7, 19];
a.sort(function(a, b) { return a - b; });
a.forEach((element) => {
  console.log(element);
});
