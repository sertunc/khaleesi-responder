/**
 * Converts the input text by replacing vowel characters with 'ı' or 'I'.
 */
function metniDonustur() {
  // Get the input text from the textarea
  const inputText = document.getElementById("metin").value;

  // Array of vowel characters to be replaced
  const vowelChars = ["a", "e", "i", "o", "ö", "u", "ü", "A", "E", "İ", "O", "Ö", "U", "Ü"];

  // Initialize an empty string to store the converted text
  let convertedText = "";

  // Iterate through each character in the input text
  for (let i = 0; i < inputText.length; i++) {
    // Check if the current character is a vowel
    if (vowelChars.includes(inputText[i])) {
      // If it's a vowel, replace it with 'I' if it's uppercase, otherwise replace it with 'ı'
      convertedText += inputText[i] === inputText[i].toUpperCase() ? "I" : "ı";
    } else {
      // If it's not a vowel, keep the original character
      convertedText += inputText[i];
    }
  }

  // Set the converted text as the content of the result element
  document.getElementById("sonuc").textContent = convertedText;
}

/**
 * Copies the converted text to the clipboard.
 */
function metniKopyala() {
  // Get the converted text from the result element
  const resultText = document.getElementById("sonuc").textContent;

  // Copy the text to the clipboard
  navigator.clipboard.writeText(resultText).then(() => {
    // Get the copy button element
    const copyButton = document.querySelector(".copy-button");

    // Change the button text to "Kopyalandı!"
    copyButton.textContent = "Kopyalandı!";

    // After 2 seconds, change the button text back to "Kopyala"
    setTimeout(() => {
      copyButton.textContent = "Kopyala";
    }, 2000);
  });
}
