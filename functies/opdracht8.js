const names = ["Henk", "Piet", "Fred", "Joop", "Kees"];

function applyPrint(names, print) {
  print(names);
}

function printLowerCase(names) {
  names.forEach((name) => {
    console.log(name.toLowerCase());
  });
}

function printUpperCase(names) {
  names.forEach((name) => {
    console.log(name.toUpperCase());
  });
}

applyPrint(names, printLowerCase);
console.log("-----");
applyPrint(names, printUpperCase);
