function Calculate(a, b) {
    return a + b;
}

let numberOne = Number(prompt(`First number to be added`))
let numberTwo = Number(prompt(`Second number to be added`))

let summedAnswer = Calculate(numberOne, numberTwo)

console.log(`The sum of ${numberOne} and ${numberTwo} is ${summedAnswer}.`)
