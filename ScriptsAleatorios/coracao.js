let number = 10;
let string = "";

for (let i = number / 2; i < number; i += 2) {
  for (let j = 1; j < number - i; j += 2) {
    string += " ";
  }
  for (let j = 1; j < i + 1; j++) {
    string += "*";
  }
  for (let j = 1; j < number - i + 1; j++) {
    string += " ";
  }
  for (let j = 1; j < i + 1; j++) {
    string += "*";
  }
  string += "\n";
}
for (let i = number; i > 0; i--) {
  for (let j = 0; j < number - i; j++) {
    string += " ";
  }
  for (let j = 1; j < i * 2; j++) {
    string += "*";
  }
  string += "\n";
}

console.log(string);
