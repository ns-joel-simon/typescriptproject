var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    // Public method
    Person.prototype.greet = function () {
        console.log("Hello, my name is ".concat(this.name));
    };
    // Private method
    Person.prototype.getAge = function () {
        return this.age;
    };
    // Protected method
    Person.prototype.getAddress = function () {
        return this.address;
    };
    return Person;
}());
// Create an instance of the class
var person = new Person("Alice", 30, "123 Main St");
person.greet(); // Public method can be accessed
// person.getAge(); // Error: Property 'getAge' is private and only accessible within class 'Person'.
// console.log(person.getAge()); // Error: Property 'getAge' is private and only accessible within class 'Person'
// Accessing private property directly will also throw an error
// console.log(person.age); // Error: Property 'age' is private and only accessible within class 'Person'
// Accessing protected property directly will also throw an error
// console.log(person.address); // Error: Property 'address' is protected and only accessible within class 'Person' and its subclasses
//   Subclasses Accessing Protected Members
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, age, address, employeeId) {
        var _this = _super.call(this, name, age, address) || this;
        _this.employeeId = employeeId;
        return _this;
    }
    Employee.prototype.displayEmployeeInfo = function () {
        console.log("Name: ".concat(this.name)); // Accessing public property
        console.log("Address: ".concat(this.getAddress())); // Accessing protected method
        console.log("Employee ID: ".concat(this.employeeId));
    };
    return Employee;
}(Person));
var employee = new Employee("Bob", 35, "456 Elm St", 12345);
employee.displayEmployeeInfo();
// Output:
// Name: Bob
// Address: 456 Elm St
// Employee ID: 12345
// Trying to access protected members directly outside the class or subclass will result in an error
// console.log(employee.address); // Error: Property 'address' is protected and only accessible within class 'Person' and its subclasses
