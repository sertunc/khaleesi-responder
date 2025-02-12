function metniDonustur() {
  const metin = document.getElementById("metin").value;
  const sesliHarfler = [
    "a",
    "e",
    "i",
    "o",
    "ö",
    "u",
    "ü",
    "A",
    "E",
    "İ",
    "O",
    "Ö",
    "U",
    "Ü",
  ];
  let yeniMetin = "";

  for (let i = 0; i < metin.length; i++) {
    if (sesliHarfler.includes(metin[i])) {
      yeniMetin += metin[i] === metin[i].toUpperCase() ? "I" : "ı";
    } else {
      yeniMetin += metin[i];
    }
  }

  document.getElementById("sonuc").textContent = yeniMetin;
}

function metniKopyala() {
  const sonucMetni = document.getElementById("sonuc").textContent;
  navigator.clipboard.writeText(sonucMetni).then(() => {
    const copyButton = document.querySelector(".copy-button");
    copyButton.textContent = "Kopyalandı!";
    setTimeout(() => {
      copyButton.textContent = "Kopyala";
    }, 2000);
  });
}
