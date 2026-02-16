let login = document.getElementById("inlogButton");
login.addEventListener("click", checkLogin);

function checkLogin(event) {
  event.preventDefault();
  let username = document.getElementById("inlogUsername").value;
  let password = document.getElementById("inlogPassword").value;
  let foutmelding = document.getElementById("foutmelding");
  if (username == "Kim" && password == "password123") {
    foutmelding.style.color = "green";
    foutmelding.textContent = "Succesvol ingelogd!";
  } else {
    foutmelding.style.color = "red";
    foutmelding.textContent =
      "Gebruikersnaam en wachtwoord moeten hetzelfde zijn.";
  }
}
