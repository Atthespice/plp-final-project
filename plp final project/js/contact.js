document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm');
  const responseDiv = document.getElementById('formResponse');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    responseDiv.textContent = "Thank you for contacting us! We'll get back to you soon.";
    responseDiv.classList.remove('hidden');
    form.reset();
  });
});
