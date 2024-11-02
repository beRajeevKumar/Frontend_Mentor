/**
 * This script handles form validation and submission for a contact form.
 * It includes functions for validating input fields, displaying error messages,
 * saving form data to localStorage, and displaying a modal upon successful submission.
 * 
 * Functions:
 * 
 * - showError(input, message): Displays the error message for a specific input field.
 *   @param {HTMLElement} input - The input element to show the error for.
 *   @param {string} message - The error message to display.
 * 
 * - hideError(input): Hides the error message for a specific input field.
 *   @param {HTMLElement} input - The input element to hide the error for.
 * 
 * - validateInput(input, regex, message): Validates an input field based on a regular expression.
 *   @param {HTMLElement} input - The input element to validate.
 *   @param {RegExp} regex - The regular expression to test the input value against.
 *   @param {string} message - The error message to display if validation fails.
 *   @returns {boolean} - Returns true if the input is valid, otherwise false.
 * 
 * - validateRequired(input, message): Validates if an input field is not empty.
 *   @param {HTMLElement} input - The input element to validate.
 *   @param {string} message - The error message to display if validation fails.
 *   @returns {boolean} - Returns true if the input is not empty, otherwise false.
 * 
 * - validateQuery(): Validates the radio buttons for query type.
 *   @returns {boolean} - Returns true if a query type is selected, otherwise false.
 * 
 * - validateCheckbox(input): Validates the consent checkbox.
 *   @param {HTMLElement} input - The checkbox element to validate.
 *   @returns {boolean} - Returns true if the checkbox is checked, otherwise false.
 * 
 * - saveFormData(): Saves form data to localStorage before submission.
 * 
 * Event Listeners:
 * 
 * - Adds blur event listeners to input fields for real-time validation.
 * - Adds change event listener to the consent checkbox for validation.
 * - Adds click event listeners to radio button containers to simulate selection by clicking on the label.
 * - Adds submit event listener to the form for final validation and submission.
 * 
 * The script also includes functionality to display a modal upon successful form submission
 * and hide it after 5 seconds.
 */

// Wait for the DOM to be fully loaded
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

    // Utility function to hide error for specific input
    function hideError(input) {
        const parent = input.closest(".input-holder");
        const errorText = parent.querySelector(".error-text");
        if (errorText) { // Check if errorText exists
            errorText.style.display = "none";
        }
        input.classList.remove("error");
    }

    // Validate input fields
    function validateInput(input, regex, message) {
        if (!regex.test(input.value.trim())) {
            showError(input, message);
            return false;
        } else {
            hideError(input);
            return true;
        }
    }

    // Validate if input is not empty
    function validateRequired(input, message) {
        if (input.value.trim() === "") {
            showError(input, message);
            return false;
        } else {
            hideError(input);
            return true;
        }
    }

    // Validate radio buttons for query type
    function validateQuery() {
        let isSelected = false;
        queryRadios.forEach((radio) => {
            if (radio.checked) isSelected = true;
        });

        const parent = document.querySelector(".query-input");
        const errorText = parent.querySelector(".error-text");

        if (!isSelected) {
            errorText.textContent = "Please select a query type.";
            errorText.style.display = "block";
            return false;
        } else {
            errorText.style.display = "none";
            return true;
        }
    }

    // Function to handle the selection of radio buttons
    document.querySelectorAll(".query-container .sec-btn").forEach((btn) => {
        btn.addEventListener("click", function () {
            // Remove 'selected' class from all buttons
            document.querySelectorAll(".query-container .sec-btn").forEach((b) => b.classList.remove("selected"));

            // Add 'selected' class to the clicked button
            this.classList.add("selected");
        });
    });

    // Validate consent checkbox
    function validateCheckbox(input) {
        const parent = input.closest(".checkbox-container");
        const errorText = parent.querySelector(".consent-error"); 
        if (!input.checked) {
            errorText.textContent = "You must consent to be contacted.";
            errorText.style.display = "block"; 
            return false;
        } else {
            errorText.style.display = "none"; 
            return true;
        }
    }

    // Event listeners for form validation on blur (when input loses focus)
    firstNameInput.addEventListener("blur", () =>
        validateInput(firstNameInput, nameRegex, "Please enter a valid first name.")
    );
    lastNameInput.addEventListener("blur", () =>
        validateInput(lastNameInput, nameRegex, "Please enter a valid last name.")
    );
    emailInput.addEventListener("blur", () =>
        validateInput(emailInput, emailRegex, "Please enter a valid email address.")
    );
    messageInput.addEventListener("blur", () =>
        validateRequired(messageInput, "This field is required.")
    );
    consentCheckbox.addEventListener("change", () =>
        validateCheckbox(consentCheckbox)
    );

    // Adding click event listeners to the radio button container to simulate selection by clicking on the label
    queryRadios.forEach((radio) => {
        const radioButtonWrapper = radio.closest(".sec-btn");
        if (radioButtonWrapper) {
            radioButtonWrapper.addEventListener("click", function (e) {
                e.preventDefault();
                queryRadios.forEach((r) => {
                    r.checked = false;
                    r.closest(".sec-btn").classList.remove("selected");
                });
                radio.checked = true;
                this.classList.add("selected");
            });
        }
    });

    // Save data to localStorage before form submission
    function saveFormData() {
        localStorage.setItem("firstName", firstNameInput.value);
        localStorage.setItem("lastName", lastNameInput.value);
        localStorage.setItem("email", emailInput.value);
        localStorage.setItem("message", messageInput.value);

        let selectedQuery = document.querySelector("input[name='query-type']:checked");
        localStorage.setItem("queryType", selectedQuery ? selectedQuery.id : "");

        localStorage.setItem("consent", consentCheckbox.checked);
    }

    // Final form validation and submission
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        // Perform final validation checks
        const isFirstNameValid = validateInput(firstNameInput, nameRegex, "Please enter a valid first name.");
        const isLastNameValid = validateInput(lastNameInput, nameRegex, "Please enter a valid last name.");
        const isEmailValid = validateInput(emailInput, emailRegex, "Please enter a valid email address.");
        const isMessageValid = validateRequired(messageInput, "This field is required.");
        const isQueryValid = validateQuery();
        const isConsentValid = validateCheckbox(consentCheckbox);

        // If all validations pass, store the data and display modal
        if (isFirstNameValid && isLastNameValid && isEmailValid && isMessageValid && isQueryValid && isConsentValid) {
            saveFormData();
            if (modalContainer) { // Check if modalContainer exists
                modalContainer.style.display = "block";

                // Hide the modal after 5 seconds
                setTimeout(() => {
                    modalContainer.style.display = "none";
                }, 5000);
            } else {
                console.error("Modal container not found.");
            }
        }
    });
});