let gooien = document.getElementById("gooi");
gooien.addEventListener("click", gooiDobbelsteen);

// let dobbelsteenPlaatjes = [
//   "images/dice1.png",
//   "images/dice2.png",
//   "images/dice3.png",
//   "images/dice4.png",
//   "images/dice5.png",
//   "images/dice6.png",
// ];

function gooiDobbelsteen() {

  for (let i = 1; i <= 4; i++) {
    let aantalOgen = Math.floor(Math.random() * 6) + 1;
    console.log(aantalOgen);
    let diceDiv = "dice" + i;

    console.log(diceDiv);
    let diceImage = "images/dice" + aantalOgen + ".png";
    console.log(diceImage);

    let diceDivs = document.getElementById(diceDiv);
    const img = document.createElement("img");
    img.src = diceImage;
    diceDivs.replaceChildren(img);
  }

  //   const diceDivs = document.querySelectorAll(".dice");

  //   diceDivs.forEach((div) => {
  //     const randomIndex = Math.floor(Math.random() * dobbelsteenPlaatjes.length);

  //     const img = document.createElement("img");
  //     img.src = dobbelsteenPlaatjes[randomIndex];

  //     div.replaceChildren(img);
  //   });
}
