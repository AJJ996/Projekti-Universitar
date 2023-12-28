document.getElementById("main-btn").addEventListener("click", function(event) {
  event.preventDefault(); // Prevent the default button behavior
  document.getElementById("sherbimet-box").scrollIntoView({ behavior: 'smooth' });
});

document.getElementById("main-btn-2").addEventListener("click", function(event) {
  event.preventDefault(); // Prevent the default button behavior
  document.getElementById("net-sherbimet-id").scrollIntoView({ behavior: 'smooth' });
});

document.getElementById("about-main-btn").addEventListener("click", function(event) {
  event.preventDefault(); // Prevent the default button behavior
  document.getElementById("timeline").scrollIntoView({ behavior: 'smooth' });
});