let myNumbers = [123, 433, 54326, 2234, 1919, 1123, 1928, 3374, 23, 190, 33874]

function Calculate2(a, b) {
    return a * b;
}

let newNumbers = []
let j = 0 

for (i = 0; i < myNumbers.length - 1; i += 2) {
  newNumbers[j] = Calculate2(myNumbers[i], myNumbers[i+1]);
  j = j + 1
}

console.log(newNumbers)

let sumAnswer = newNumbers.reduce(function(a, b) {
  return a + b;
}, 0);

console.log(sumAnswer)