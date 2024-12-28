// 1. Basic Function
function greet(name: string): string {
    return `Hello, ${name}!`;
  }
  console.log(greet("Alice"));
  
  // 2. Function with Optional Parameters
  function greet(name: string, greeting?: string): string {
    return `${greeting || "Hello"}, ${name}!`;
  }
  console.log(greet("Alice"));
  console.log(greet("Alice", "Good morning"));
  
  // 3. Function with Default Parameters
  function greet(name: string, greeting: string = "Hello"): string {
    return `${greeting}, ${name}!`;
  }
  console.log(greet("Alice"));
  console.log(greet("Alice", "Good morning"));
  
  // 4. Function with Rest Parameters
  function sum(...numbers: number[]): number {
    return numbers.reduce((total, num) => total + num, 0);
  }
  console.log(sum(1, 2, 3, 4));
  
  // 5. Function as a Variable (Anonymous Function)
  const greet = function(name: string): string {
    return `Hello, ${name}!`;
  };
  console.log(greet("Alice"));
  
  // 6. Arrow Function
  const greet = (name: string): string => `Hello, ${name}!`;
  console.log(greet("Alice"));
  
  // 7. Function Overloading
  function combine(a: string, b: string): string;
  function combine(a: number, b: number): number;
  function combine(a: any, b: any): any {
    return a + b;
  }
  console.log(combine("Hello, ", "Alice"));
  console.log(combine(5, 10));
  