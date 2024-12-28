// Overload signatures
function greet(person: string): string;
function greet(person: string, age: number): string;

// Function implementation
function greet(person: string, age?: number): string {
  if (age) {
    return `Hello, ${person}. You are ${age} years old.`;
  } else {
    return `Hello, ${person}.`;
  }
}

console.log(greet("Alice"));           // Output: Hello, Alice.
console.log(greet("Bob", 30));         // Output: Hello, Bob. You are 30 years old.

// overriding
// Parent class
class Animal {
    speak(): void {
      console.log("Animal makes a sound");
    }
  }
  
  // Subclass that overrides the method
  class Dog extends Animal {
    speak(): void {
      console.log("Dog barks");
    }
  }
  
  // Subclass that overrides the method
  class Cat extends Animal {
    speak(): void {
      console.log("Cat meows");
    }
  }
  
  const dog = new Dog();
  dog.speak();  // Output: Dog barks
  
  const cat = new Cat();
  cat.speak();  // Output: Cat meows
  