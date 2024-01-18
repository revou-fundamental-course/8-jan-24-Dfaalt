const kalkulatorForm = document.getElementById("kalkulator-form");
const sisiInput = document.getElementById("sisi");
const luasOutput = document.getElementById("luas");
const kelilingOutput = document.getElementById("keliling");

kalkulatorForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const sisi = parseFloat(sisiInput.value);

  if (isNaN(sisi) || sisi <= 0) {
    alert("Masukkan angka sisi yang valid!");
    return;
  }

  const luas = sisi * sisi;
  const keliling = 4 * sisi;

  luasOutput.textContent = luas;
  kelilingOutput.textContent = keliling;
});
