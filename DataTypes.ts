//enum
enum Color {
    Red,
    Green,
    Blue
}
let favoriteColor: Color = Color.Green;

//any
let variable: any = "Hello";
variable = 42; // No error

//noid
function logMessage(message: string): void {
    console.log(message);
}

//never
function throwError(message: string): never {
    throw new Error(message);
}

//union
let value: string | number;
value = "Hello";
value = 42; // Both are valid

//TyprAliases
type ID = string | number;
let userId: ID = 123; // or "abc123"

//custom objects
let person: { name: string; age: number } = {
    name: "Alice",
    age: 25
};

//functions
function add(a: number, b: number): number {
    return a + b;
}

//optional an default parameters
function greet(name: string, greeting?: string): string {
    return `${greeting || "Hello"}, ${name}!`;
}

//type assertion
let someValue: any = "This is a string";
let strLength: number = (someValue as string).length;



