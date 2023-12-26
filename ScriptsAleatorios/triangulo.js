let number = 8;
let string = "";

for (let i = 0; i < number; i++) {
  for (let j = i; j < number - 1; j++) {
    string += " ";
  }
  for (let k = 0; k < 2 * i + 1; k++) {
    string += "*";
  }
  string += "\n";
}

console.log(string);
