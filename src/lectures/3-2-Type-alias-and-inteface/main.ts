//TODO: Primitive type

type studentName = string;

// TODO: Object type

type HumanC1 = {
  readonly id: number;
  name: string;
  age?: number; // Optional
};

interface HumanC2 {
  readonly id: number;
  name: string;
  age?: number; // Optional
}

const studentA: HumanC1 = {
  id: 1,
  name: 'Student A',
};

const studentB: HumanC1 = {
  id: 2,
  name: 'Student B',
  age: 18,
};

// TODO: Union type

type Status = 'active' | 'inactive';
type ProductStatus = 0 | 1 | 2 | 3 | 4 | 5;
type StudentId = number | string;

interface Human {
  id: number | string;
  name: string;
  gender: 'Male' | 'Female';
  grade: 'A' | 'B' | 'C' | 'D' | 'E';
}

// TODO: Intersection type

interface BusinessPartner {
  name: string;
  credit: number;
}

interface Identity {
  id: number;
  name: string;
}

interface Contact {
  email: string;
  phone: string;
}

type Employee = Identity & Contact;
type Customer = BusinessPartner & Contact;

let c: Customer = {
  name: 'Sin',
  credit: 100000,
  email: 'sin@gmail.com',
  phone: '0123456789',
};

// TODO: Add new props

interface Bird {
  id: number;
  name: string;
}

// Declaration merging

interface Bird {
  age?: number;
}

let bird: Bird = {
  id: 1,
  name: 'Bird',
  age: 18,
};

console.log(bird);

// TODO: Naming type vs Interface

interface Product {
  id: string;
  title: string;
}

interface ProductProps {
  data: Product;
}

function Product({ data }: ProductProps) {
  console.log(data);
}


