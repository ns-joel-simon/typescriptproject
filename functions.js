// 1. Basic Function
function greet(name) {
    return "Hello, ".concat(name, "!");
}
console.log(greet("Alice"));

// 2. Function with Optional Parameters
function greet(name, greeting) {
    return "".concat(greeting || "Hello", ", ").concat(name, "!");
}
console.log(greet("Alice"));
console.log(greet("Alice", "Good morning"));

// 3. Function with Default Parameters
function greet(name, greeting) {
    if (greeting === void 0) { greeting = "Hello"; }
    return "".concat(greeting, ", ").concat(name, "!");
}
console.log(greet("Alice"));
console.log(greet("Alice", "Good morning"));

// 4. Function with Rest Parameters
function sum() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (total, num) { return total + num; }, 0);
}
console.log(sum(1, 2, 3, 4));

// 5. Function as a Variable (Anonymous Function)
var greet = function (name) {
    return "Hello, ".concat(name, "!");
};
console.log(greet("Alice"));

// 6. Arrow Function
var greet = function (name) { return "Hello, ".concat(name, "!"); };
console.log(greet("Alice"));
function combine(a, b) {
    return a + b;
}
console.log(combine("Hello, ", "Alice"));
console.log(combine(5, 10));
