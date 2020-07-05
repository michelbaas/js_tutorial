let states = ["Noord Holland", "Noord Brabant", "Friesland", "Groningen", "Drenthe", "Overijsel", "Gelderland", "Flevoland", "Zeeland", "Zuid Holland", "Utrecht", "Limburg"];

// // Returns a URL-friendly version of a string.
// // For example: "Noord Brabant" => "noord-brabant"
// function urlify(string) {
//   return string.toLowerCase().split(/\s+/).join("-");
// }
//
// function funcUrls(elements) {
//   return elements.map(element => "https://example.com/" + urlify(element));
// }
// console.log(funcUrls(states));

// ALTERNATIVES for URLs:
// function urlify(string) {
//   return "https://example.com/" + string.toLowerCase().split(/\s+/).join("-");
// }
//
// urls: imperative version
// function impUrls(elements) {
//   let urls = [];
//   elements.forEach(function(element) {
//     urls.push(urlify(element));
//   });
//   return urls;
// }
// console.log(impUrls(states));

// urls: functional version
// function funcUrls(elements) {
//   return elements.map(element => urlify(element));
// }
// console.log(funcUrls(states));

// // singles: imperative version
// function impSing(elements) {
//   let singles = [];
//   elements.forEach((element) => {
//     if (element.split(/\s+/).length === 1) {
//     singles.push(element);
//     }
//   });
//   return singles;
// }
//
// console.log(impSing(states));
//
// // singles: functional version
// function funcSing(elements) {
//   return elements.filter(element => element.split(/\s+/).length === 1);
// }
// console.log(funcSing(states));
//
// // includes "land" (string#includes)
// function landString(elements) {
//   return elements.filter(element => element.includes("land"));
// }
// console.log("LS");
// console.log(landString(states));
//
// // includes "land" (regex, case insensitive)
// function regexString(elements) {
//   return elements.filter(element => element.match(/\land/gi));
// }
// console.log("RS");
// console.log(regexString(states));


let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//
// // sum: imperative solution
// function impSum(elements) {
//   let total = 0;
//   elements.forEach((element) => {
//     total += element;
//   });
//   return total;
// }
// console.log(impSum(numbers));
//
// // sum: functional solution
// function funcSum(elements) {
//   return elements.reduce((total, n) => { return total +=  n});
// }
// console.log(funcSum(numbers));

// // lengths: imperative solution
// function impLengths(elements) {
//   let lengths = {};
//   elements.forEach((element) => {
//     lengths[element] = element.length;
//   });
//   return lengths;
// }
// console.log(impLengths(states));
//
// // lengths: functionalsolution
// function funcLengths(elements) {
//   return elements.reduce((lengths, element) => {
//                           lengths[element] = element.length;
//                           return lengths;
//   }, {});
// }
// console.log(funcLengths(states));

function funcProd(array) {
  return array.reduce((total, n) => total *= n);
  }
console.log(funcProd(numbers));
