// Basic Syntax:
try {
    // Code that might throw an error
  } catch (error) {
    // Code to handle the error
  } finally {
    // Code that runs regardless of an error
  }

//   Example of Try-Catch-Finally:
function divide(a: number, b: number): number {
    try {
      if (b === 0) {
        throw new Error("Cannot divide by zero");
      }
      return a / b;
    } catch (error) {
      console.error("Error:", error.message);
      return 0; // Return a default value
    } finally {
      console.log("Execution complete");
    }
  }
  
  console.log(divide(10, 2)); // Output: 5
  console.log(divide(10, 0)); // Output: Error: Cannot divide by zero, Execution complete, 0
  