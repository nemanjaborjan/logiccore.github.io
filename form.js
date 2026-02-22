// JavaScript kod za validaciju forme

document.getElementById("contactForm").addEventListener("submit", function (e) {

   e.preventDefault();

   var ime = document.getElementById("name");
   var email = document.getElementById("email");
   var tel = document.getElementById("phone");
   var cb1 = document.getElementById("cb1");
   var cb2 = document.getElementById("cb2");

   removeErrors();

   let isValid = true;

   var imeRegex = /^[A-Za-zŠšĐđŽžČčĆć\s]{4,30}$/;
   if (!imeRegex.test(ime.value.trim())) {
      showError(ime, "Name must not contain numbers or special characters");
      isValid = false;
   }
   
   var emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com|[a-zA-Z0-9._%+-]+@yahoo\.com$/;
   if (!emailRegex.test(email.value.trim())) {
      showError(email, "Email must be in the format example@gmail.com/@yahoo.com");
      isValid = false;
   }

   var telRegex = /^(\+3816\d{7,9}|06\d{7,9})$/;
   if (!telRegex.test(tel.value.trim())) {
      showError(tel, "Phone must be in the format 06XXXXXXXX or +3816XXXXXXXX");
      isValid = false;
   }
   
   if (!cb1.checked && !cb2.checked) {
      showError(cb2, "Please select either a consultation or reservation.");
      isValid = false;
   }

   // Validacija forme
   if (isValid) {
   const form = document.getElementById("contactForm");
   const button = form.querySelector(".cta-button");

   setTimeout(() => {
      button.classList.add("success");
      button.textContent = "Success";
   }, 800);
   setTimeout(() => {
      form.reset();
      button.classList.remove("success");
      button.textContent = "Send Message";
   }, 2000);
}

});

// Funkcija za prikaz greške

function showError(input, message) {
    const error = document.createElement("medium");
    error.className = "error-message";
    error.style.color = "#00ccff";
    error.textContent = message;

    input.parentElement.appendChild(error);
}

function removeErrors() {
    const errors = document.querySelectorAll(".error-message");
    errors.forEach(error => error.remove());
}