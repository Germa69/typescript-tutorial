// TODO: Default function return type

function sayHello() {
  console.log('Hello world!'); // void
}

function sum(a: number, b: number) {
  return a + b; // number
}

// TODO: Explicit return type

function plus(a: number, b: number): number {
  return a - b; // number
}

// TODO: Optional parameter

function getLength(numberList?: number[]) {
  return Array.isArray(numberList) ? numberList.length : 0;
}

// TODO: Default parameter
function getLength1(numberList: number[] = []) {
  return Array.isArray(numberList) ? numberList.length : 0;
}

// TODO: Other type

type NewType = number & string; // never

function fail(msg: string): never {
  throw new Error(msg);
}

function fn(x: string | number) {
  if (typeof x === 'string') {
    // do something
  } else if (typeof x === 'number') {
    // do something else
  } else {
    x; // never
  }
}

// TODO: Destructuring parameter

//? C1:
function createStudent1(id: number, name: string, age: number) {
  console.log(id, name, age);
}

createStudent1(1, 'Anh', 18);

//? C2
function createStudent2(student: { id: number; name: string; age: number }) {
  const { id, name, age } = student;
  console.log(id, name, age);
}

createStudent2({
  id: 1,
  name: 'Anh',
  age: 18,
});

//? C3:
function createStudent3({ id, name, age }: { id: number; name: string; age: number }) {
  console.log(id, name, age);
}

createStudent3({
  id: 1,
  name: 'Anh',
  age: 18,
});

//? C4:
interface Student {
  id: number;
  name: string;
  age: number;
}

function createStudent4({ id, name, age }: Student) {
  console.log(id, name, age);
}

createStudent4({
  id: 1,
  name: 'Anh',
  age: 18,
} as Student);
