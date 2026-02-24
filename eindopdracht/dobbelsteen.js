let gooien = document.getElementById("gooi");
gooien.addEventListener("click", gooiDobbelsteen);

let speler1Score = 0;
let speler2Score = 0;
let gelijkspelScore = 0;

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
  const dobbelstenen = [];

  diceDivs.forEach((div) => {
    const aantalOgen = Math.floor(Math.random() * dobbelsteenPlaatjes.length);
    dobbelstenen.push(aantalOgen + 1);

    const img = document.createElement("img");
    img.src = dobbelsteenPlaatjes[aantalOgen];

    div.replaceChildren(img);
  });
  let speler1Totaal = dobbelstenen[0] + dobbelstenen[1];
  let speler2Totaal = dobbelstenen[2] + dobbelstenen[3];

  console.log("Speler 1 totaal: " + speler1Totaal);
  console.log("Speler 2 totaal: " + speler2Totaal);

  let winst = document.getElementById("winst");
  let verlies = document.getElementById("verlies");
  let gelijkspel = document.getElementById("gelijkspel");

  if (speler1Totaal > speler2Totaal) {
    speler1Score = speler1Score + 1;
    winst.textContent = "winst: " + speler1Score;
  } else if (speler2Totaal > speler1Totaal) {
    speler2Score = speler2Score + 1;
    verlies.textContent = "verlies: " + speler2Score;
  } else {
    gelijkspelScore = gelijkspelScore + 1;
    gelijkspel.textContent = "Gelijkspel: " + gelijkspelScore;
  }

  let eindScore = document.getElementById("eindScore");

  if (speler1Score == 3) {
    eindScore.textContent = "Jij hebt gewonnen!";
  } else if (speler2Score == 3) {
    eindScore.textContent = "De computer heeft gewonnen!";
  }

  if (speler1Score == 3 || speler2Score == 3) {
    gooien.disabled = true;
  }
}

let reset = document.getElementById("reset");
reset.addEventListener("click", resetSpel);

function resetSpel() {
  speler1Score = 0;
  speler2Score = 0;
  gelijkspelScore = 0;

  const diceDivs = document.querySelectorAll(".dice");
  const dobbelstenen = [];

  diceDivs.forEach((div) => {
    const aantalOgen = Math.floor(Math.random() * dobbelsteenPlaatjes.length);
    dobbelstenen.push(aantalOgen + 1);

    const img = "";

    div.replaceChildren(img);
  });

  let winst = document.getElementById("winst");
  let verlies = document.getElementById("verlies");
  let gelijkspel = document.getElementById("gelijkspel");

  winst.textContent = "Winst: ";
  verlies.textContent = "Verlies: ";
  gelijkspel.textContent = "Gelijkspel: ";

  let eindScore = document.getElementById("eindScore");
  eindScore.textContent = "";

  gooien.disabled = false;
}
