// 1. for loop
for (let i = 0; i < 5; i++) {
    console.log(i);
  }
  
  // 2. while loop
  let i = 0;
  while (i < 5) {
    console.log(i);
    i++;
  }
  
  // 3. do...while loop
  let i = 0;
  do {
    console.log(i);
    i++;
  } while (i < 5);
  
  // 4. for...in loop (Object)
  let user = { name: "Alice", age: 25, city: "Wonderland" };
  for (let key in user) {
    console.log(key, user[key]);
  }
  
  // 5. for...in loop (Array)
  let arr = [10, 20, 30];
  for (let index in arr) {
    console.log(index, arr[index]);
  }
  
  // 6. for...of loop (Array)
  let arr = [10, 20, 30];
  for (let value of arr) {
    console.log(value);
  }
  