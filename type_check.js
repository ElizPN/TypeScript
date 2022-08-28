let customersArray = [
  "Custy Stomer",
  "C. Oostomar",
  "C.U.S. Tomer",
  3432434,
  "Custo Mer",
  "Custopher Ustomer",
  3432435,
  "Kasti Yastimeur",
];

function checkCustomersArray(arr) {
  for (let el of arr) {
    if (typeof el !== "string") {
      console.log(`Type error: ${el} should be a string!`);
    }
  }
}

checkCustomersArray(customersArray);

function stringPush(val) {
  if (typeof val === "string") {
    customersArray.push(val);
  }
  return customersArray;
}
let res = stringPush("hallo"); // return index of element
console.log(res);
