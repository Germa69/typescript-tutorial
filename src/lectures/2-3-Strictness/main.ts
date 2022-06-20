// nolmplicitAny

function isEmpty(numberList: number[]) {
  return numberList.length === 0;
}

console.log(isEmpty([1, 2, 3])); // false
console.log(isEmpty([])); // true

// strictNullChecks

let str;

if (Math.random() > 0.5) {
  str = 'Hello, world';
}

if (str !== undefined) {
  console.log(str.toString());
}
