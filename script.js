
let lastScrollY = window.scrollY;
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > lastScrollY) {
    // Scrolling down → hide navbar
    nav.style.top = "-100px"; 
  } else {
    // Scrolling up → show navbar
    nav.style.top = "0";
  }
  lastScrollY = window.scrollY;
});
const hamburger = document.querySelector('.hamburger');
const overlay = document.querySelector('.nav-overlay');
const navLinks = overlay.querySelectorAll('a'); // all links inside overlay

hamburger.addEventListener('click', () => {
  overlay.classList.toggle('active');
  hamburger.classList.toggle('open');

  // Disable or enable body scroll
  if (overlay.classList.contains('active')) {
    document.body.style.overflow = 'hidden'; // prevent scrolling
  } else {
    document.body.style.overflow = ''; // restore scrolling
  }
});

// Close overlay when a link is clicked
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    overlay.classList.remove('active');
    hamburger.classList.remove('open');
    document.body.style.overflow = ''; // restore scrolling
  });
});

// Optional: remove overlay on resize and restore scroll
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    overlay.classList.remove('active');
    hamburger.classList.remove('open');
    document.body.style.overflow = ''; // restore scrolling
  }
});
function copyEmail(btn) {
  const email = "yourgmail@gmail.com"; // replace with your Gmail
  navigator.clipboard.writeText(email).then(() => {
    btn.classList.add("copied");

    // Reset back to normal after 2s
    setTimeout(() => {
      btn.classList.remove("copied");
    }, 2000);
  });
}






