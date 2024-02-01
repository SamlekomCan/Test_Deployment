function isPalindrome(str) {
  const cleanedStr = str.toLowerCase().replace(/[\W_]/g, "");
  return cleanedStr === cleanedStr.split("").reverse().join("");
}

function checkPalindrome() {
  const inText = document.getElementById("inputText").value;
  const result = document.getElementById("result");

  //   if (inText.trim() === "") {
  //     result.innerHTML = "Please enter a word or phrase.";
  //     return;
  //   }

  if (isPalindrome(inText)) {
    result.innerHTML = `"${inText}" is TRUE`;
  } else {
    result.innerHTML = `"${inText}" is FALSE`;
  }
  document.getElementById("inputText").value = "";
}
