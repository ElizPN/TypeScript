type OperatorFunction = (a: number, b: number) => number;

let add: OperatorFunction = function (a, b) {
  return a + b;
};
let subtract: OperatorFunction = function (a, b) {
  return a - b;
};
let multiply: OperatorFunction = function (a, b) {
  return a * b;
};
let divide: OperatorFunction = function (a, b) {
  return a / b;
};

function mathTutor(operationCallback: OperatorFunction) {
  console.log("Let's learn how to", operationCallback.name, "!");
  let value25 = operationCallback(2, 5);
  console.log(
    "When we",
    operationCallback.name,
    "2 and 5, we get",
    value25,
    "."
  );
  console.log(
    "When we",
    operationCallback.name,
    value25,
    "and 7, we get",
    operationCallback(value25, 7),
    "."
  );
  console.log("Now fill out this worksheet.");
}
