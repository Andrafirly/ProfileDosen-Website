function pencarian() {
  var kataKunci = document.getElementById("kataKunci").value;
  // Dapatkan semua elemen p di halaman web
  var paragraf = document.getElementsByTagName("p");
  // Lakukan pencarian pada setiap elemen p
  for (var i = 0; i < paragraf.length; i++) {
    if (paragraf[i].textContent.indexOf(kataKunci) > -1) {
      // Jika ditemukan, tampilkan elemen
      paragraf[i].style.display = "";
    } else {
      // Jika tidak ditemukan, sembunyikan elemen
      paragraf[i].style.display = "none";
    }
  }
}
document
  .getElementById("formPencarian")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    pencarian();
  });
