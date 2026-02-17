const dobbelstenen = [];

let gooien = document.getElementById("gooi");
gooien.addEventListener("click", gooi);

// let dobbelsteenPlaatjes = [
//   "images/dice1.png",
//   "images/dice2.png",
//   "images/dice3.png",
//   "images/dice4.png",
//   "images/dice5.png",
//   "images/dice6.png",
// ];

function gooi() {
  for (let i = 0; i <= 3; i++) {
    let aantalOgen = Math.floor(Math.random() * 6) + 1;

    dobbelstenen[i] = aantalOgen;

    // console.log(aantalOgen);
    let diceDiv = "dice" + (i + 1);

    // console.log(diceDiv);
    let diceImage = "images/dice" + aantalOgen + ".png";
    // console.log(diceImage);

    let diceDivs = document.getElementById(diceDiv);
    const img = document.createElement("img");
    img.src = diceImage;
    diceDivs.replaceChildren(img);
  }

  console.log(dobbelstenen);
  speler1Totaal = dobbelstenen[0] + dobbelstenen[1];
  speler2Totaal = dobbelstenen[2] + dobbelstenen[3];

  console.log("Speler 1 totaal: " + speler1Totaal);
  console.log("Speler 2 totaal: " + speler2Totaal);

  //   const diceDivs = document.querySelectorAll(".dice");

  //   diceDivs.forEach((div) => {
  //     const randomIndex = Math.floor(Math.random() * dobbelsteenPlaatjes.length);

  //     const img = document.createElement("img");
  //     img.src = dobbelsteenPlaatjes[randomIndex];

  //     div.replaceChildren(img);
  //   });
}
