let login = document.getElementById("inlogButton");
login.addEventListener("click", function (event) {
  event.preventDefault();
  checkLogin();
});

function checkLogin() {
  let username = document.getElementById("inlogUsername").value;
  let password = document.getElementById("inlogPassword").value;
  if (username == "Kim" && password == "password123") {
    alert("Je bent succesvol ingelogd!");
  } else {
    alert("Ongeldige gebruikersnaam of wachtwoord. Probeer het opnieuw.");
  }
}
