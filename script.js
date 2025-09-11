
const hamburger = document.querySelector(".hamburger");
const overlay = document.querySelector(".nav-overlay");
const navLinks = overlay.querySelectorAll("a"); // all links inside overlay

hamburger.addEventListener("click", () => {
  overlay.classList.toggle("active");
  hamburger.classList.toggle("open");

  // Disable or enable body scroll
  if (overlay.classList.contains("active")) {
    document.body.style.overflow = "hidden"; // prevent scrolling
  } else {
    document.body.style.overflow = ""; // restore scrolling
  }
});

// Close overlay when a link is clicked
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    overlay.classList.remove("active");
    hamburger.classList.remove("open");
    document.body.style.overflow = ""; // restore scrolling
  });
});

// Optional: remove overlay on resize and restore scroll
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    overlay.classList.remove("active");
    hamburger.classList.remove("open");
    document.body.style.overflow = ""; // restore scrolling
  }
});



