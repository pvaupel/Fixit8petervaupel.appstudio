let userName = prompt(`What is your name?`)
let i = 0

while (i <= userName.length - 1) {
  console.log(`Letter ${i+1} is: ${userName.charAt(i)}`);  
  i++;
}