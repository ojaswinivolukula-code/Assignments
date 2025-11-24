// a
let a1 = 5, b1 = 7;
console.log(`${a1} + ${b1} = ${a1 + b1}`);

// b
let threeLines = `
This is line 1
This is line 2
This is line 3
`;
console.log(threeLines);

// c
const firstName = "John";
const lastName = "Doe";
console.log(`Full Name: ${firstName} ${lastName}`);


// a
const square = (n) => n * n;

// b

const obj1 = {
    value: 50,
    test: () => console.log(this.value) 
};
obj1.test();

// c
const obj2 = {
    value: 50,
    test() {
        console.log(this.value);
    }
};
obj2.test();
//3.
// a
const product = { name: "Pen", price: 10 };
const copyProduct = { ...product };

// b
const a = { x: 1 };
const b = { y: 2 };
const merged = { ...a, ...b };

// c
function maxValue(...nums) {
    return Math.max(...nums);
}
console.log(maxValue(2, 5, 9, 20));

//4.
// a
const arr = [10, 20, 30];
const [a4, b4] = arr;

// b
const laptop = { brand: "Dell", ram: "8GB" };
const { brand } = laptop;

// c
const info = {};
console.log(info?.user?.address); 
//5.

// a
for (var i = 0; i < 3; i++) {}
console.log(i);

// b
for (let j = 0; j < 3; j++) {}
// console.log(j);  

// c) Why const?
// Prevents reassignment → avoids unintentional changes.

//6.

// a
let kmph = 70;
let speed = kmph > 60 ? "Fast" : "Normal";
console.log(speed);

// b
let age = 16;
console.log(age >= 18 ? "Adult" : "Minor");

// c
let num = -5;
let result =
    num > 0 ? "Positive" :
    num === 0 ? "Zero" :
    "Negative";
console.log(result);

//7.
// a
const nums = [1,2,3];
const nums2 = [...nums, 4, 5];

// b
let x = ["x","y"];
let z = ["z"];
let combined = [...x, ...z];

// c
function printNames(...names) {
    return names;
}
console.log(printNames("A", "B", "C"));
//8.
// a
const user = { id: 101, status: "active" };
const { id, status } = user;

// b
const myUser = {
    id,
    role: "admin"
};

// c
const person = {
    name: "Riya",
    age: 20,
    greet() {
        console.log(`Hello, I am ${this.name}`);
    }
};
person.greet();
//9.
// a
console.log(`Today is ${new Date().toDateString()}`);

// b
let NAME = "Barbie";
let SCORE = 95;
console.log(`Hello ${NAME}, your score is ${SCORE}/100`);

//10.
// a
const add = (x, y) => x + y;

// b
const isAdult = (age) => age >= 18;

// c
const double = (n) => n * 2;

// 11.
// a
const arr1 = [1,2,3];
const cloned = [...arr1];

// b
const arr2 = [10,20,30];
const updated = [100, ...arr2];

// c
const objA = { a: 1, b: 2 };
const objB = { b: 99, c: 3 };
const mergedObj = { ...objA, ...objB };



// 12.
// a
const userOC = {
    name: "Alex",
    address: {
        city: "Bangalore"
    }
};
console.log(userOC?.address?.city);

// b
console.log(userOC?.job?.title); 

// c
const profile = {};
console.log(profile?.details?.info?.email); 
