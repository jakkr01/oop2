// Create an empty inventory array
let inventory: [string, number, number][] = [];

// Add products
inventory.push(["Laptop", 999.99, 10]);
inventory.push(["Mouse", 19.99, 50]);
inventory.push(["Keyboard", 49.99, 30]);

// Display the full inventory
for (const [name, price, qty] of inventory) {
  console.log(`Product: ${name}, Price: $${price}, Quantity: ${qty}`);
}