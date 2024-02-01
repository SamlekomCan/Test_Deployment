var correctPassword = "P@swword123";
var userPassword = prompt("Masukkan password:");

if (userPassword === correctPassword) {
  alert("Password benar! Selamat datang.");

  var userScore = prompt("Masukkan Angka (1-100):");
  var score = parseInt(userScore);

  if (score >= 80 && score <= 100) {
    alert("GRADE A");
  } else if (score >= 60 && score < 80) {
    alert("GRADE B");
  } else if (score >= 40 && score < 60) {
    alert("GRADE C");
  } else if (score < 40 && score >= 0) {
    alert("GRADE D");
  } else {
    alert("Error! Silahkan Input Angka 1-100");
  }
} else {
  alert("Password Salah!");
  window.location.href = "https://www.google.com";
}
