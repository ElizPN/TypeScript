let test: string = "it works";
console.log(test);

let str: string = "abc";
let num: number = 123;
let bol: boolean = true;

let test1: number = 123;
let test2: number = 456;
let test3: string = test1 + " " + test2;
console.log(test3);

// Two ways to define type of arrays
let arr: number[] = [1, 2, 3, 4, 5];
let arr2: Array<number> = [1, 2, 3, 4, 5];

// We can not change structure of object, only value of keys
let user = { name: "john", age: 30 };
user = { name: "lila", age: 70 };

let date = { year: 2025, month: 12, day: 31, isLeap: true };
date.isLeap = false;

let res = 0;
for (let i: number = 0; i < 100; i++) {
  res += i;
}

let array: number[] = [1, 2, 3, 4, 5];
let result: number = 0;

for (let elem of arr) {
  res += elem;
}

// Functions
function sum(x: number, y: number): number {
  return x + y;
}

function sum2(arr: number[]): number {
  let mySum = 0;

  for (let num of arr) {
    mySum += num;
  }

  return mySum;
}

// Function returns nothing
function fun(elem: HTMLElement, text: string): void {
  elem.textContent = text;
}

//Tuples
let yearMonth: [number, number] = [2022, 8];
let yearMonthStr: [number, string] = [2022, "august"];
let yearMonthDay: [number, number, number] = [2022, 8, 18];

yearMonthDay[0] = 2023;
console.log(yearMonthDay);

// We can not change the array
let user2: readonly [string, number] = ["John", 30];

// Optional value in tuple
let user3: [string, number, boolean?] = ["Kenny", 78];
let date2: [number, number?, number?] = [30];

//Tuple destructuring
let time: [number, number, number] = [12, 59, 59];

let [year, month, day] = time;
console.log(year); // 12
console.log(month); // 59
console.log(day); // 59

// Using operator rest we can define an arbitrary number of values of the same type
// First element - string, second element - arbitrary number of numbers
let tpl: [string, ...number[]];

tpl = ["John", 1, 2, 3, 4, 5];

let tpl2: [string, string, ...number[]];
tpl2 = ["hi", "hello", 8908908];

let tpl3: [number, boolean, ...string[]];
tpl3 = [10, true, "good buy", "hallo"];

//Enum as type
//Numbering does not have to be from zero.

enum week {
  mon,
  tue,
  wen,
  thir,
  frid,
  sut,
  sun,
}
console.log(week.wen); // 2

enum week2 {
  mon = 2,
  tue,
  wen,
  thir,
  frid,
  sut,
  sun,
}

console.log(week2.wen); // 4

enum months {
  jen = "jenuary",
  feb = "february",
}

// any
let test4: number = 123;
let test5: string = "abc";
let test6: any = "klkll";
test6 = test4;
console.log(test6);

test6 = test5;
console.log(test6);

let MessyArr: any[] = [1, 2, 3, "jiui", true, {}];

// Combining types

// Tip : if your variable or property migth be indefined - do checking of undefined:  if (variable/ property = true) {run your code}
// Otherwice Typescript will show wrror " your property might be undefined"
let test7: number | null;
test7 = 89;
test7 = null;
console.log(test7);

let test8: number | string | undefined;

test8 = 89;
test8 = "uiuiu";

//Type aliases
type differ = boolean | null;
let test9: differ = true;

type differ2 = boolean | null | undefined;
let test10: differ2 = undefined; // don't forget to create checking on undefined

//String literal type
let note: "error" | "warning" | "success";

type message = "error" | "warning" | "success";
let note2: message;

// Built-in object types
let data: Date;
data = new Date();
console.log(data);

let reg: RegExp;
reg = new RegExp(/.+?/);
console.log(reg);

type MyPromise = Promise<{}>;
let myMessage: MyPromise;

// Map collection
let map = new Map<number[], string>();
let arr3 = [1, 2];
let arr4 = [3, 4];
let arr5 = [5, 6];

map.set(arr3, "data3");
map.set(arr4, "data4");
map.set(arr5, "data5");
console.log(map.get(arr3));

let males = { name1: "Kenny", name2: "Jonny" };
let femails = { name1: "Liza", name2: "Kate" };

let position1 = ["driver", "sailor"];
let position2 = ["receptionist", "waiter"];

let myMap = new Map<{ name1: string; name2: string }, string[]>([
  [males, position1],
  [femails, position2],
]);
console.log(myMap.get(males));

// Set colllection
let setArr = new Set([1, 2, 3, 4, 2, 3, 4, 1, 6]);
console.log(setArr);

let setArr2 = new Set();
setArr2.add(1).add(2).add(3);
console.log(setArr2);
console.log(setArr.has(3));
console.log(setArr.size);

//Interface

interface Empoyee {
  name: string;
  age: number;
  salatyday: number;
}
const waiter: Empoyee = { name: "Kolia", age: 30, salatyday: 25 };
const sailor: Empoyee = { name: "Jimmi", age: 21, salatyday: 24 };

interface Time {
  hour: number;
  minute: number;
  second: number;
}

const today: Time = { hour: 16, minute: 20, second: 29 };

interface Country {
  name: string;
  cities: string[];
}

let currentCountry: Country = {
  name: "France",
  cities: ["Paris", "Nice", "Marceille"],
};

interface myEvent {
  name: string;
  time: {
    start: string;
    finish: string;
  };
}
let myEvent: myEvent = {
  name: "my new event",
  time: {
    start: "2025-11-01",
    finish: "2025-12-31",
  },
};

interface EmpoyeeInf {
  name: string;
  position: {
    name: string;
    salary: number;
  };
  addr: {
    country: string;
    city: string;
  };
}
let employeeInf: EmpoyeeInf = {
  name: "andrew",
  position: {
    name: "programmer",
    salary: 1000,
  },
  addr: {
    country: "Belarus",
    city: "minsk",
  },
};

// Objects inside objects

let newEmployee: NewEmployee = {
  name: "andrew",
  position: {
    name: "programmer",
    salary: 1000,
  },
  addr: {
    country: "Belarus",
    city: "minsk",
  },
};

interface NewEmployee {
  name: string;
  position: Position;
  addr: Addres;
}

interface Position {
  name: string;
  salary: number;
}

interface Addres {
  country: string;
  city: string;
}

let newUser: User = {
  name: "john",
  age: 30,
  parents: {
    mother: {
      name: "jane",
      age: 30,
      parents: null,
    },
    father: {
      name: "eric",
      age: 30,
      parents: null,
    },
  },
};

interface User {
  name: string;
  age: number;
  parents: Parents;
}
interface Parents {
  mother: Parent;
  father: Parent;
}
interface Parent {
  name: string;
  age: number;
  parents: null;
}

let ArrrRegExp: RegExp[] = [/.+?/, /.+?/, /.+?/];

let promisArr: Promise<{}>[] = [];

let promise1 = Promise.resolve(3);
let promise2 = Promise.resolve(42);
// callback that I need to call when I want to resolve Promise
let promise3 = new Promise(function (resolve, reject) {
  //setTimeout calls resolve
  setTimeout(resolve, 100, "foo");
});
// when pomise has resolved I decide what I want to do with received data
promise3.then(() => {}).catch(() => {});

Promise.all([promise1, promise2, promise3]).then(function (values) {
  console.log(values);
});

interface CurrentEmployee {
  name: string;
  age: number;
  avaliblity: boolean;
}

let newEmloyers: CurrentEmployee[] = [
  { name: "Joakim", age: 30, avaliblity: true },
];

function showDay(year?: number, month?: number, day?: number) {
  let newDate;
  let dayOfWeek;
  if (year && month && day) {
    newDate = new Date(year, month, day);
    dayOfWeek = newDate.getDay();
  } else if (month && day) {
    year = new Date().getFullYear(); // get year
    newDate = new Date(year, month, day); // create new date
    dayOfWeek = newDate.getDay(); // extract day of week
  } else if (year && day) {
    month = new Date().getMonth(); // get month
    newDate = new Date(year, month, day); // create new date
    dayOfWeek = newDate.getDay(); // extract day of week
  }
  return dayOfWeek;
}
console.log(showDay(undefined, 9, 19));

// Default values in functions
function raiseToPower(num: number, power: number = 2) {
  let res = 1;
  for (let i = 0; i < power; i++) {
    res *= num;
  }
  return res;
}
console.log(raiseToPower(2));

// Rest parametrs on functions
function getSum(...rest: number[]): number {
  let sum = 0;
  for (let value of rest) {
    sum += value;
  }
  return sum;
}
console.log(getSum(1, 2, 3));

// Function type
let myFun: (x: number, y: number) => number;
myFun = function (x: number, y: number): number {
  return x + y;
};

type Func = (text: string) => void;
let func: Func = function (text: string): void {
  console.log(text);
};

type Func2 = (a: number, b: number) => number;
let func2: Func2 = function (a: number, b: number): number {
  return a * b;
};

// callbacks

function make(amount: number, fun: (num: number) => number): number {
  return fun(amount);
}

let showRes = make(3, function (num): number {
  return num * 2;
});
console.log(showRes);

type Func3 = (num: number) => number;

function making(arr: number[], func: Func3): number[] {
  return arr.map(function (elem: number) {
    return func(elem);
  });
}

let result1: number[] = making([1, 2, 3], function (num: number): number {
  return num ** 2;
});

console.log(result1);

type Func4 = (num: number) => number;

function newMaking(arr: number[], func: Func4): number {
  let sum = 0;

  for (let elem of arr) {
    sum += func(elem);
  }

  return sum;
}

let myResult: number = newMaking([1, 2, 3], function (num): number {
  return num ** 2;
});

console.log(myResult);

// Array functions
let myfunc = (num1: number, num2: number): number => num1 + num2;

let myFunc2 = (str: string): string[] => str.split("");

let myArr: number[] = [1, 2, 3];
let myres = myArr.map((num: number): number => num ** 2);
console.log(myres, "myres");
