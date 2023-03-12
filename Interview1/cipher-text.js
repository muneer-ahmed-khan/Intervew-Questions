const secretKey = "MEGABUCK";
const input = "I am being interviewed for the position of backend developer";

// sort the secret into alphabetically
// ABCEGKMU
const orderSecret = secretKey.split("").sort();

const orderedObj = {};

// output string
let output = "";

// create a cipher object with key, order and values
for (let index = 0; index < orderSecret.length; index++) {
  orderedObj[orderSecret[index]] = {
    key: index + 1,
    order: secretKey.indexOf(orderSecret[index]) + 1,
    values: [],
  };
}

// track the order
let order = 1;

// console.log(orderedObj);

// loop through the input and add the values in row fashion now
for (let index = 0; index < input.length; index++) {
  // first need to make sure that we don't have a space
  if (input[index] !== " ") {
    // loop through the object to find the correct order property
    for (let [key, elements] of Object.entries(orderedObj)) {
      // if order is match then add the value to that object
      if (elements.order === order) {
        elements.values.push(input[index]);
      } else continue;
    }
    // increment the order value
    order++;

    // if order is to the maximum value of the secret then start again from start
    if (order > secretKey.length) order = 1;
  }
}

// console.log(orderedObj);

// prepare the output now
// i need to get the values by consider the order of the key now

let start = 1;

for (let [key, elements] of Object.entries(orderedObj)) {
  // if order is match then add the value to that object
  if (elements.key === start) {
    output += elements.values.toString();
    start++;
  }
}

output = output.split(",").join("").split(" ").join("");
console.log(output);
