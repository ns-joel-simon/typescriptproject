
// Parent class (superclass)
class Animal {
    name: string;
  
    constructor(name: string) {
      this.name = name;
    }
  
    speak(): void {
      console.log(`${this.name} makes a sound`);
    }
  }
  
  // Child class (subclass) that inherits from Animal
  class Dog extends Animal {
    breed: string;
  
    constructor(name: string, breed: string) {
      super(name);  // Call the parent class constructor
      this.breed = breed;
    }
  
    speak(): void {
      console.log(`${this.name} barks`);
    }
  
    displayBreed(): void {
      console.log(`Breed: ${this.breed}`);
    }
  }
  
  const dog = new Dog("Buddy", "Golden Retriever");
  dog.speak(); // Output: Buddy barks
  dog.displayBreed(); // Output: Breed: Golden Retriever

  // Define an interface
interface Animal {
    name: string;
    speak(): void;
  }
  
  // Class implementing the Animal interface
  class Dog implements Animal {
    name: string;
  
    constructor(name: string) {
      this.name = name;
    }
  
    speak(): void {
      console.log(`${this.name} barks`);
    }
  }
  
  const dog = new Dog("Max");
  dog.speak(); // Output: Max barks
  
//   Example of Combining Inheritance and Interface
// Define an interface
interface Flyable {
    fly(): void;
  }
  
  // Parent class (superclass)
  class Animal {
    name: string;
  
    constructor(name: string) {
      this.name = name;
    }
  
    speak(): void {
      console.log(`${this.name} makes a sound`);
    }
  }
  
  // Child class (subclass) implementing an interface and extending a class
  class Bird extends Animal implements Flyable {
    constructor(name: string) {
      super(name); // Call parent constructor
    }
  
    speak(): void {
      console.log(`${this.name} chirps`);
    }
  
    fly(): void {
      console.log(`${this.name} is flying`);
    }
  }
  
  const bird = new Bird("Eagle");
  bird.speak(); // Output: Eagle chirps
  bird.fly();   // Output: Eagle is flying
  