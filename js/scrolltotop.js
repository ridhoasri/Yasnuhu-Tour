// Dapatkan tombol "Scroll to Top"
var scrollToTopButton = document.getElementById("scrollToTopButton");

// Tambahkan event listener untuk menggulirkan halaman ke atas saat tombol diklik
scrollToTopButton.addEventListener("click", function() {
  // Gulir ke bagian atas halaman dengan animasi smooth
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// Tampilkan tombol "Scroll to Top" saat halaman digulir ke bawah
window.addEventListener("scroll", function() {
  // Dapatkan posisi vertikal halaman
  var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

  // Jika posisi scroll lebih besar dari 20 piksel, tampilkan tombol
  if (scrollPosition > 20) {
    scrollToTopButton.style.display = "block";
  } else {
    scrollToTopButton.style.display = "none";
  }
});
