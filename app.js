var test = "it works";
console.log(test);
var str = "abc";
var num = 123;
var bol = true;
var test1 = 123;
var test2 = 456;
var test3 = test1 + " " + test2;
console.log(test3);
// Two ways to define type of arrays
var arr = [1, 2, 3, 4, 5];
var arr2 = [1, 2, 3, 4, 5];
// We can not change structure of object, only value of keys
var user = { name: "john", age: 30 };
user = { name: "lila", age: 70 };
var date = { year: 2025, month: 12, day: 31, isLeap: true };
date.isLeap = false;
var res = 0;
for (var i = 0; i < 100; i++) {
    res += i;
}
var array = [1, 2, 3, 4, 5];
var result = 0;
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var elem = arr_1[_i];
    res += elem;
}
// Functions
function sum(x, y) {
    return x + y;
}
function sum2(arr) {
    var mySum = 0;
    for (var _i = 0, arr_2 = arr; _i < arr_2.length; _i++) {
        var num_1 = arr_2[_i];
        mySum += num_1;
    }
    return mySum;
}
// Function returns nothing
function fun(elem, text) {
    elem.textContent = text;
}
//Tuples
var yearMonth = [2022, 8];
var yearMonthStr = [2022, "august"];
var yearMonthDay = [2022, 8, 18];
yearMonthDay[0] = 2023;
console.log(yearMonthDay);
// We can not change the array
var user2 = ["John", 30];
// Optional value in tuple
var user3 = ["Kenny", 78];
var date2 = [30];
//Tuple destructuring
var time = [12, 59, 59];
var year = time[0], month = time[1], day = time[2];
console.log(year); // 12
console.log(month); // 59
console.log(day); // 59
// Using operator rest we can define an arbitrary number of values of the same type
// First element - string, second element - arbitrary number of numbers
var tpl;
tpl = ["John", 1, 2, 3, 4, 5];
var tpl2;
tpl2 = ["hi", "hello", 8908908];
var tpl3;
tpl3 = [10, true, "good buy", "hallo"];
//Enum as type
//Numbering does not have to be from zero.
var week;
(function (week) {
    week[week["mon"] = 0] = "mon";
    week[week["tue"] = 1] = "tue";
    week[week["wen"] = 2] = "wen";
    week[week["thir"] = 3] = "thir";
    week[week["frid"] = 4] = "frid";
    week[week["sut"] = 5] = "sut";
    week[week["sun"] = 6] = "sun";
})(week || (week = {}));
console.log(week.wen); // 2
var week2;
(function (week2) {
    week2[week2["mon"] = 2] = "mon";
    week2[week2["tue"] = 3] = "tue";
    week2[week2["wen"] = 4] = "wen";
    week2[week2["thir"] = 5] = "thir";
    week2[week2["frid"] = 6] = "frid";
    week2[week2["sut"] = 7] = "sut";
    week2[week2["sun"] = 8] = "sun";
})(week2 || (week2 = {}));
console.log(week2.wen); // 4
var months;
(function (months) {
    months["jen"] = "jenuary";
    months["feb"] = "february";
})(months || (months = {}));
// any
var test4 = 123;
var test5 = "abc";
var test6 = "klkll";
test6 = test4;
console.log(test6);
test6 = test5;
console.log(test6);
var MessyArr = [1, 2, 3, "jiui", true, {}];
// Combining types
// Tip : if your variable or property migth be indefined - do checking of undefined:  if (variable/ property = true) {run your code}
// Otherwice Typescript will show wrror " your property might be undefined"
var test7;
test7 = 89;
test7 = null;
console.log(test7);
var test8;
test8 = 89;
test8 = "uiuiu";
var test9 = true;
var test10 = undefined; // don't forget to create checking on undefined
//String literal type
var note;
var note2;
// Built-in object types
var data;
data = new Date();
console.log(data);
var reg;
reg = new RegExp(/.+?/);
console.log(reg);
var myMessage;
// Map collection
var map = new Map();
var arr3 = [1, 2];
var arr4 = [3, 4];
var arr5 = [5, 6];
map.set(arr3, "data3");
map.set(arr4, "data4");
map.set(arr5, "data5");
console.log(map.get(arr3));
var males = { name1: "Kenny", name2: "Jonny" };
var femails = { name1: "Liza", name2: "Kate" };
var position1 = ["driver", "sailor"];
var position2 = ["receptionist", "waiter"];
var myMap = new Map([
    [males, position1],
    [femails, position2],
]);
console.log(myMap.get(males));
// Set colllection
var setArr = new Set([1, 2, 3, 4, 2, 3, 4, 1, 6]);
console.log(setArr);
var setArr2 = new Set();
setArr2.add(1).add(2).add(3);
console.log(setArr2);
console.log(setArr.has(3));
console.log(setArr.size);
var waiter = { name: "Kolia", age: 30, salatyday: 25 };
var sailor = { name: "Jimmi", age: 21, salatyday: 24 };
var today = { hour: 16, minute: 20, second: 29 };
var currentCountry = {
    name: "France",
    cities: ["Paris", "Nice", "Marceille"]
};
var myEvent = {
    name: "my new event",
    time: {
        start: "2025-11-01",
        finish: "2025-12-31"
    }
};
var employeeInf = {
    name: "andrew",
    position: {
        name: "programmer",
        salary: 1000
    },
    addr: {
        country: "Belarus",
        city: "minsk"
    }
};
// Objects inside objects
var newEmployee = {
    name: "andrew",
    position: {
        name: "programmer",
        salary: 1000
    },
    addr: {
        country: "Belarus",
        city: "minsk"
    }
};
var newUser = {
    name: "john",
    age: 30,
    parents: {
        mother: {
            name: "jane",
            age: 30,
            parents: null
        },
        father: {
            name: "eric",
            age: 30,
            parents: null
        }
    }
};
var ArrrRegExp = [/.+?/, /.+?/, /.+?/];
var promisArr = [];
var promise1 = Promise.resolve(3);
var promise2 = Promise.resolve(42);
// callback that I need to call when I want to resolve Promise
var promise3 = new Promise(function (resolve, reject) {
    //setTimeout calls resolve
    setTimeout(resolve, 100, "foo");
});
// when pomise has resolved I decide what I want to do with received data
promise3.then(function () { })["catch"](function () { });
Promise.all([promise1, promise2, promise3]).then(function (values) {
    console.log(values);
});
var newEmloyers = [
    { name: "Joakim", age: 30, avaliblity: true },
];
function showDay(year, month, day) {
    if (year && month && day) {
        var date_1 = new Date(year, month, day);
        var dayOfWeek = date_1.getDay();
        return dayOfWeek;
    }
    else {
        return "I require comlite date";
    }
}
console.log(showDay(2022, 10, 6));
