class Person {
    public name: string;         // Can be accessed anywhere
    private age: number;         // Can only be accessed within this class
    protected address: string;   // Can be accessed within this class and subclasses
  
    constructor(name: string, age: number, address: string) {
      this.name = name;
      this.age = age;
      this.address = address;
    }
  
    // Public method
    public greet() {
      console.log(`Hello, my name is ${this.name}`);
    }
  
    // Private method
    private getAge() {
      return this.age;
    }
  
    // Protected method
    protected getAddress() {
      return this.address;
    }
  }
  
  // Create an instance of the class
  const person = new Person("Alice", 30, "123 Main St");
  
  person.greet(); // Public method can be accessed
  // person.getAge(); // Error: Property 'getAge' is private and only accessible within class 'Person'.
  // console.log(person.getAge()); // Error: Property 'getAge' is private and only accessible within class 'Person'
  
  // Accessing private property directly will also throw an error
  // console.log(person.age); // Error: Property 'age' is private and only accessible within class 'Person'
  
  // Accessing protected property directly will also throw an error
  // console.log(person.address); // Error: Property 'address' is protected and only accessible within class 'Person' and its subclasses
  
//   Subclasses Accessing Protected Members
  class Employee extends Person {
    private employeeId: number;
  
    constructor(name: string, age: number, address: string, employeeId: number) {
      super(name, age, address);
      this.employeeId = employeeId;
    }
  
    public displayEmployeeInfo() {
      console.log(`Name: ${this.name}`); // Accessing public property
      console.log(`Address: ${this.getAddress()}`); // Accessing protected method
      console.log(`Employee ID: ${this.employeeId}`);
    }
  }
  
  const employee = new Employee("Bob", 35, "456 Elm St", 12345);
  employee.displayEmployeeInfo();
  // Output:
  // Name: Bob
  // Address: 456 Elm St
  // Employee ID: 12345
  
  // Trying to access protected members directly outside the class or subclass will result in an error
  // console.log(employee.address); // Error: Property 'address' is protected and only accessible within class 'Person' and its subclasses
  