// TODO: Object destructuring

interface Student {
  id: number;
  fullName: string;
  age: number;
  gender: string;
}

const bob = {
  id: 1,
  fullName: 'Bob',
  age: 18,
  gender: 'Female',
};

// Destructuring
// const { id, fullName, age, gender } = bob;

// Destructuring + rest operators: Gom tất cả những thuộc tính còn lại của Object
const { id, ...rest } = bob;
// console.log(id);
// console.log(rest);

// Spread operator: Clone object
const subject = {
  subName: 'Physical',
  publisher: 'Sin',
};

const subject1 = {
  ...subject,
  publisher: 'Dang',
};
// console.log(subject1);

//TODO: Array destructuring

const fullName = 'Sin Dang';
const wordList = fullName.split(' ');

const [firstName, lastName] = wordList;
console.log(firstName); // Sin

// Array with rest operators
const [x, y, ...numbers] = [1, 2, 3, 4, 5, 6, 7];
console.log(x, y, numbers); // 1 2 [3, 4]

// Clone array with spread operators
const numberList = [1, 2, 3];
const newList1 = [...numberList]; // [1, 2, 3]
const newList2 = [...numberList, 5, 6]; // [1, 2, 3, 5, 6]

// Swap two items
let a = 5;
let b = 10;

[b, a] = [a, b];
console.log(a, b); // a:10, b:5
