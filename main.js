const juan = {
  name: "Juanito",
  age: 18,
  approvedCourses: ["Curso 1"],
  addCourse(newCourse) {
    this.approvedCourses.push(newCourse);
  }
};


// console.log(Object.keys(juan));
// console.log(Object.getOwnPropertyNames(juan));
// console.log(Object.entries(juan));


Object.defineProperty(juan,"navigator", {
  value: "chrome",
  writable: true,
  enumerable: false,
  configurable: true
})


Object.defineProperty(juan,"editor", {
  value: "VSCode",
  writable: false,
  enumerable: true,
  configurable: true
})

Object.defineProperty(juan,"terminal", {
  value: "WSL",
  writable: true,
  enumerable: true,
  configurable: false
})

Object.defineProperty(juan,"pruebaNASA", {
  value: "extraterrestres",
  writable: false,
  enumerable: false,
  configurable: false
})

console.log(Object.getOwnPropertyDescriptors(juan));

// Shallow object
const obj1 = {
  a: 'a',
  b: 'b',
  c: {
    d: 'd',
    e: 'e'
  }
}

const obj2 = {};

for(prop in obj1) {
  obj2[prop] = obj1[prop] 
}

// Metodo estatico assign de Object
const obj3 = Object.assign({}, obj1);

// Metodo estatico create de Object
const obj4 = Object.create(obj1)

// JSON.stringify y JSON.parse

const ObjetoOriginal = {
  a_b: 'a',
  b: 'b',
  c: {
    d: 'd',
    e: 'e'
  },
  number: 5,
  bool: true,
  name$$$: "hola"
}

const stringifiedComplexObj = JSON.stringify(ObjetoOriginal);

const ObjetoCopia = JSON.parse(stringifiedComplexObj);