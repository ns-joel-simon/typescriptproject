// class ClassName {
//     property1: type;
//     property2: type;
  
//     constructor(property1: type, property2: type) {
//       this.property1 = property1;
//       this.property2 = property2;
//     }
  
//     method1() {
//       console.log("Method 1");
//     }
//   }

//   Example of a Class and Object
// 1. Defining a class
class Person {
    name: string;
    age: number;
  
    // Constructor to initialize properties
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  
    // Method to introduce the person
    introduce(): void {
      console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
    }
  }
  
  // 2. Creating an object (instance) of the class
  const person1 = new Person("Alice", 25);
  
  // 3. Using the method of the object
  person1.introduce();  // Output: Hi, my name is Alice and I am 25 years old.
  