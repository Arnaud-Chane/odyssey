const message = "Thank you for submitting the form. We will get back to you shortly.";
document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();
  alert(message);
});
