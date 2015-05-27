var customers = [1, 2, 3];

// Array comprehensions
var results = [
  for(let c of customers)
    if (c.city == "Seattle")
      { name: c.name, age: c.age }
];

// Generator comprehensions
var results = (
  for(let c of customers)
    if (c.city == "Seattle")
      { name: c.name, age: c.age }
);