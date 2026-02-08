let animePersonages = [
  "Naruto Uzumaki",
  "Monkey D. Luffy",
  "Goku",
  "Sailor Moon",
  "Spike Spiegel",
];

function checkName(animePersonages) {
  return animePersonages.find((personage) => personage === "Goku");
}
console.log(checkName(animePersonages));
