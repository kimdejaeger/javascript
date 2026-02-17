let gooien = document.getElementById("gooi");
gooien.addEventListener("click", gooiDobbelsteen);

let dobbelsteenPlaatjes = [
  "images/dice1.png",
  "images/dice2.png",
  "images/dice3.png",
  "images/dice4.png",
  "images/dice5.png",
  "images/dice6.png",
];

function gooiDobbelsteen() {
  const diceDivs = document.querySelectorAll(".dice");

  diceDivs.forEach((div) => {
    const randomIndex = Math.floor(Math.random() * dobbelsteenPlaatjes.length);

    const img = document.createElement("img");
    img.src = dobbelsteenPlaatjes[randomIndex];

    div.replaceChildren(img);
  });
}
