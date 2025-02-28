function loadHTML(elementId, file) {
  fetch(file)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById(elementId).innerHTML = data;
    });
}
function toggleMenu() {
  console.log("Menu toggled!"); // Debugging
  const mobileNav = document.querySelector(".mobile-nav");
  mobileNav.classList.toggle("active");

  let items = document.querySelectorAll(".mobile-nav li");
  items.forEach((item, index) => {
    item.style.animationDelay = `${index * 0.1}s`;
  });
}

// Attach the event dynamically

console.log("Starting");
// Load each section into the main HTML
document.addEventListener("DOMContentLoaded", function () {
  loadHTML("header-container", "../html/header.html");
  loadHTML("hero-container", "../html/hero.html");
  loadHTML("about-container", "../html/about.html");
  loadHTML("speakers-container", "../html/speakers.html");
  loadHTML("timeline-container", "../html/timeline.html");
  loadHTML("contact-container", "../html/contact.html");
  loadHTML("footer-container", "../html/footer.html");
});
function loadScript(src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = resolve;
    script.onerror = reject;
    document.body.appendChild(script);
  });
}

window.onload = function () {
  Promise.all([
    loadScript("../js/header.js"),
    loadScript("../js/hero.js"),
    loadScript("../js/about.js"),
    loadScript("../js/speakers.js"),
    loadScript("../js/timeline.js"),
    // loadScript("../js/contact.js"),
    // loadScript("../js/footer.js"),
  ])
    .then(() => {
      console.log("All sections loaded!");
    })
    .catch((err) => console.error("Error loading scripts", err));
};
