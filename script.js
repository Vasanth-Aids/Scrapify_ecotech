// script.js

// Event listener for LinkedIn button
const linkedinButton = document.querySelector(".btn.linkedin");
linkedinButton.addEventListener("click", () => {
  window.open("https://www.linkedin.com/in/azhagu-pandia-raja/", "_blank");
});

// Event listener for Email button
const emailButton = document.querySelector(".btn.email");
emailButton.addEventListener("click", () => {
  window.location.href = "mailto:azhagu.vasusena@gmail.com";
});

// Event listener for Apply button
const applyButton = document.querySelector(".btn.apply");
applyButton.addEventListener("click", () => {
  alert("Redirecting to the application page!");
  // Replace with actual application page URL
  window.location.href = "https://example.com/application";
});

// Event listener for Send Message button
const messageButton = document.querySelector(".btn.message");
messageButton.addEventListener("click", () => {
  alert("Opening message form!");
  // Replace with actual contact form link or modal activation
  window.location.href = "#contact";
});
