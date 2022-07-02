// TODO: Generics

interface List<T> {
  length: number;
  [index: number]: T;
}

const numberL: List<number> = [1, 2, 3];
const wordL: List<string> = ['easy', 'frontend'];

interface StudentTest {
  id: number;
  name: string;
}

const studentList: List<StudentTest> = [{ id: 1, name: 'Test' }];

console.log(studentList);

// TODO: Keyof operators

interface Animal {
    legs: number;
    eye: number;
}

type AnimalKeys = keyof Animal;

const keys: AnimalKeys = 'eye';
console.log(keys);

// TODO: Keyof operators

console.log(typeof window !== 'undefined'); // true on client, false on server

// TODO: Mapped types

interface Dog {
    id: number;
    name: string;
}

type MappedTypes = {
    [Key in keyof Dog]: boolean;
}