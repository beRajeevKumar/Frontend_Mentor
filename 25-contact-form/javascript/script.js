document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const firstNameInput = document.getElementById("first-name");
    const lastNameInput = document.getElementById("last-name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");
    const consentCheckbox = document.getElementById("consent");
    const queryRadios = document.querySelectorAll("input[name='query-type']");
    const modalContainer = document.querySelector(".modal-container");

     // Regular Expressions for validation
     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     const nameRegex = /^[a-zA-Z]+$/;

     // Utility function to show error for specific input
    function showError(input, message) {
        const parent = input.closest(".input-holder");
        if (parent) {
            const errorText = parent.querySelector(".error-text");
            if (errorText) {
                errorText.textContent = message;
                errorText.style.display = "block";
            }
        }
        input.classList.add("error");
    }
