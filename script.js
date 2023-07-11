// cibler les elements
const form = document.querySelector("form");
const passwordInput = document.getElementById("password");
const passToggleBtn = document.getElementById("pass-toggle-btn");

//condition 1
const showError = (field, errorText) => {
    field.classList.add("error");
    const errorElement = document.createElement("small");
    errorElement.classList.add("error-text");
    errorElement.innerText = errorText;
    field.closest(".form-group").appendChild(errorElement);
}

// condition2
const handleFormData = (e) => {
    e.preventDefault();

   
    const fullnameInput = document.getElementById("fullname");
    const emailInput = document.getElementById("email");
    const dateInput = document.getElementById("date");
    const genderInput = document.getElementById("gender");

    
    const fullname = fullnameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    const date = dateInput.value;
    const gender = genderInput.value;

   //email
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  
    document.querySelectorAll(".form-group .error").forEach(field => field.classList.remove("error"));
    document.querySelectorAll(".error-text").forEach(errorText => errorText.remove());

    // erreur vide
    if (fullname === "") {
        showError(fullnameInput, "Soraty ny anaranao feno");
    }
    if (!emailPattern.test(email)) {
        showError(emailInput, "Soraty ny adiresy mailaka");
    }
    if (password === "") {
        showError(passwordInput, "Soraty ny teny miafina");
    }
    if (date === "") {
        showError(dateInput, "Soraty daty ny nahaterana");
    }
    if (gender === "") {
        showError(genderInput, "Lahy sa vavy ianao?");
    }

 
    const errorInputs = document.querySelectorAll(".form-group .error");
    if (errorInputs.length > 0) return;

   
    form.submit();
}


passToggleBtn.addEventListener('click', () => {
    passToggleBtn.className = passwordInput.type === "password" ? "fa-solid fa-eye-slash" : "fa-solid fa-eye";
    passwordInput.type = passwordInput.type === "password" ? "text" : "password";
});


form.addEventListener("submit", handleFormData);