// Form Validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();
  let formMessage = document.getElementById("formMessage");

  if (name === "" || email === "" || message === "") {
    formMessage.style.color = "yellow";
    formMessage.textContent = "⚠️ Please fill out all fields.";
  } else {
    formMessage.style.color = "lime";
    formMessage.textContent = "✅ Thank you! Your message has been sent.";
    document.getElementById("contactForm").reset();
  }
});
