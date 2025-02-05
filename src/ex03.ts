// Exercise: Write a function `logValues` that takes an array of any type of values (numbers, strings, booleans, etc.).
// The function should iterate through the array and log each value along with its type.

function logValues(values: unknown[]) {
  for (const value of values) {
    if (typeof value === "object") {
      if (value !== null) {
        Object.entries(value).forEach(([k, v]) => {
          console.log(`{ ${k}: "${v}" } (${typeof value})`);
        });
        continue;
      }
    }

    if (typeof value === "string") {
      console.log(`"${value}" (${typeof value})`);
      continue;
    }
    console.log(`${value} (${typeof value})`);
  }
}
logValues([42, "Hello", true, { name: "Alice" }]);
// Expected output:
// 42 (number)
// "Hello" (string)
// true (boolean)
// { name: "Alice" } (object)
