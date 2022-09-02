// Pointed as a TYPE ALIAS
// type Pointed = {
//     x: number,
//     y: number
// }

// const pt: Point = {x: 213, y:12}

// Point using an INTERFACE:
interface Pointed {
  x: number;
  y: number;
}

const pt: Pointed = { x: 123, y: 1234 };

interface People {
  readonly id: number,
  first: string,
  last: string,
  nickname?: string,
  sayHi(): string
}

const kal: People = {
id: 1228,
first: 'Kal',
last: '-El',
nickname: 'Clark',
sayHi() {
  return 'Hello'
},
}
console.log(kal);


interface Person {
  readonly id: number;
  first: string;
  last: string;
  nickname?: string;
  // sayHi: () => string;
  sayHi(): string;
}

const thomas: Person = {
  first: "Thomas",
  last: "Hardy",
  nickname: "Tom",
  id: 21837,
  sayHi: () => {
    return "Hello!";
  },
};

thomas.first = "kasjdh";
// thomas.id = 238974;

interface Products {
  name: string;
  price: number;
  applyDiscount(discount: number): number;
}

const shoes: Products = {
  name: "Blue Suede Shoes",
  price: 100,
  applyDiscount(amount: number) {
    const newPrice = this.price * (1 - amount);
    this.price = newPrice;
    return this.price;
  },
};

console.log(shoes.applyDiscount(0.4));

// Re-opening an interface:
interface Dogs {
  name: string;
  age: number;
}

interface Dogs {
  breed: string;
  bark(): string;
}

const elton: Dogs = {
  name: "Elton",
  age: 0.5,
  breed: "Australian Shepherd",
  bark() {
    return "WOOF WOOF!";
  },
};

// Extending an interface:
interface ServiceDog extends Dogs {
  job: "drug sniffer" | "bomb" | "guide dog";
}

const chewy: ServiceDog = {
  name: "Chewy",
  age: 4.5,
  breed: "Lab",
  bark() {
    return "Bark!";
  },
  job: "guide dog",
};

interface Human {
  name: string;
}

interface Employee {
  readonly id: number;
  email: string;
}

// Extending multiple interfaces
interface Engineer extends Human, Employee {
  level: string;
  languages: string[];
}

const pierre: Engineer = {
  name: "Pierre",
  id: 123897,
  email: "pierre@gmail.com",
  level: "senior",
  languages: ["JS", "Python"],
};

console.log(pierre);

